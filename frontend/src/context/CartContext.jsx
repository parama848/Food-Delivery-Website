import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  /* ======================
     🔐 AUTH
  ====================== */
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  /* ======================
     🛒 CART (PER USER)
  ====================== */
  const [cartItems, setCartItems] = useState([]);

  /* ======================
     🌐 BACKEND
  ====================== */
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  const api = axios.create({
    baseURL: backendUrl,
    headers: { "Content-Type": "application/json" },
  });

  /* ======================
     🔁 LOAD AUTH ON REFRESH
  ====================== */
  useEffect(() => {
    const t = localStorage.getItem("token");
    const e = localStorage.getItem("userEmail");

    if (t) setToken(t);
    if (e) setUserEmail(e);
  }, []);

  /* ======================
     🔁 LOAD CART PER USER
  ====================== */
  useEffect(() => {
    if (userEmail) {
      const savedCart =
        JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
      setCartItems(savedCart);
    } else {
      setCartItems([]);
    }
  }, [userEmail]);

  /* ======================
     🔁 SAVE CART PER USER
  ====================== */
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(
        `cart_${userEmail}`,
        JSON.stringify(cartItems)
      );
    }
  }, [cartItems, userEmail]);

  /* ======================
     🛒 CART ACTIONS
  ====================== */
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  /* ======================
     ✅ CLEAR CART (AFTER ORDER)
  ====================== */
  const clearCart = () => {
    setCartItems([]);
    if (userEmail) {
      localStorage.removeItem(`cart_${userEmail}`);
    }
  };

  return (
    <CartContext.Provider
      value={{
        token,
        setToken,
        userEmail,
        setUserEmail,
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        backendUrl,
        api,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
