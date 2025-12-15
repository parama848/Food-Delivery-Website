// // // // // // // CartContext.jsx
// // // // // // import React, { createContext, useEffect, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import axios from "axios";

// // // // // // export const FoodContext = createContext();

// // // // // // // Helper: ensure the value is an array (convert objects keyed by id into array)
// // // // // // const ensureArray = (value) => {
// // // // // //   if (Array.isArray(value)) return value;
// // // // // //   if (value && typeof value === "object") {
// // // // // //     // If it's an object like { id1: {...}, id2: {...} } convert to array
// // // // // //     try {
// // // // // //       return Object.values(value).map((it) => {
// // // // // //         // normalize each item
// // // // // //         return {
// // // // // //           ...it,
// // // // // //           id: it.id !== undefined ? String(it.id) : undefined,
// // // // // //           qty: Number(it.qty) || 1,
// // // // // //         };
// // // // // //       });
// // // // // //     } catch (e) {
// // // // // //       console.warn("ensureArray: failed to convert object to array", e, value);
// // // // // //       return [];
// // // // // //     }
// // // // // //   }
// // // // // //   return [];
// // // // // // };

// // // // // // export const CartContextProvider = ({ children }) => {

// // // // // //    const [token, setToken] = useState("");
// // // // // //    const navigate = useNavigate();

// // // // // //    //backend
// // // // // //    const rawBackendUrl = import.meta.env.VITE_BACKEND_URL;
// // // // // //    const backendUrl = rawBackendUrl ?? "http://localhost:400"

// // // // // //    // axios backend url
// // // // // //    const api = axios.create({
// // // // // //     baseURL:backendUrl,
// // // // // //     Headers:{"content-type":"application/json"},
// // // // // //     timeout:10_000,
// // // // // //    })

// // // // // //    // saving token 
// // // // // //    useEffect(()=>{
// // // // // //     const stored = localStorage.getItem("token");
// // // // // //     if(stored){
// // // // // //       setToken(stored);
// // // // // //     }
// // // // // //    },[])

   

// // // // // //   // Load from localStorage safely and normalize to array
// // // // // //   const [cartItems, setCartItems] = useState(() => {
  
// // // // // //     try {
// // // // // //       const saved = localStorage.getItem("cartItems");
// // // // // //       if (!saved) return [];
// // // // // //       const parsed = JSON.parse(saved);
// // // // // //       const arr = ensureArray(parsed);
// // // // // //       return arr;
// // // // // //     } catch (err) {
// // // // // //       console.warn("CartContext: failed to parse cartItems from localStorage", err);
// // // // // //       return [];
// // // // // //     }
// // // // // //   });

// // // // // //   // Save normalized array to localStorage on update
// // // // // //   useEffect(() => {
// // // // // //     try {
// // // // // //       const normalized = ensureArray(cartItems);
// // // // // //       localStorage.setItem("cartItems", JSON.stringify(normalized));
// // // // // //     } catch (err) {
// // // // // //       console.warn("CartContext: failed to save cartItems to localStorage", err);
// // // // // //     }
// // // // // //   }, [cartItems]);

// // // // // //   // ADD TO CART
// // // // // //   const addToCart = (food) => {
// // // // // //     const foodId = String(food.id);

// // // // // //     setCartItems((prev) => {
// // // // // //       const arr = ensureArray(prev);
// // // // // //       const exists = arr.find((item) => String(item.id) === foodId);

// // // // // //       if (exists) {
// // // // // //         return arr.map((item) =>
// // // // // //           String(item.id) === foodId ? { ...item, qty: (Number(item.qty) || 0) + 1 } : item
// // // // // //         );
// // // // // //       }

// // // // // //       // add normalized item
// // // // // //       return [...arr, { ...food, id: foodId, qty: 1 }];
// // // // // //     });
// // // // // //   };

// // // // // //   // INCREASE QTY
// // // // // //   const increaseQty = (id) => {
// // // // // //     const sid = String(id);
// // // // // //     setCartItems((prev) => {
// // // // // //       const arr = ensureArray(prev);
// // // // // //       return arr.map((item) =>
// // // // // //         String(item.id) === sid ? { ...item, qty: (Number(item.qty) || 0) + 1 } : item
// // // // // //       );
// // // // // //     });
// // // // // //   };

// // // // // //   // DECREASE QTY
// // // // // //   const decreaseQty = (id) => {
// // // // // //     const sid = String(id);
// // // // // //     setCartItems((prev) => {
// // // // // //       const arr = ensureArray(prev);
// // // // // //       return arr.map((item) =>
// // // // // //         String(item.id) === sid && (Number(item.qty) || 0) > 1
// // // // // //           ? { ...item, qty: (Number(item.qty) || 0) - 1 }
// // // // // //           : item
// // // // // //       );
// // // // // //     });
// // // // // //   };

// // // // // //   // REMOVE ITEM
// // // // // //   const removeItem = (id) => {
// // // // // //     const sid = String(id);
// // // // // //     setCartItems((prev) => {
// // // // // //       const arr = ensureArray(prev);
// // // // // //       return arr.filter((item) => String(item.id) !== sid);
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <FoodContext.Provider
// // // // // //       value={{ cartItems, addToCart, increaseQty, decreaseQty, removeItem,token,setToken,navigate,backendUrl}}
// // // // // //     >
// // // // // //       {children}
// // // // // //     </FoodContext.Provider>
// // // // // //   );
// // // // // // };

// // // // // // src/context/CartContext.jsx
// // // // // import React, { createContext, useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // /**
// // // // //  * ✅ EXPORT THE CORRECT CONTEXT NAME
// // // // //  * This MUST match imports everywhere: CartContext
// // // // //  */
// // // // // export const CartContext = createContext();

// // // // // /**
// // // // //  * Helper: ensure value is always an array
// // // // //  */
// // // // // const ensureArray = (value) => {
// // // // //   if (Array.isArray(value)) return value;

// // // // //   if (value && typeof value === "object") {
// // // // //     try {
// // // // //       return Object.values(value).map((it) => ({
// // // // //         ...it,
// // // // //         id: it.id !== undefined ? String(it.id) : undefined,
// // // // //         qty: Number(it.qty) || 1,
// // // // //       }));
// // // // //     } catch (e) {
// // // // //       console.warn("ensureArray failed:", e);
// // // // //       return [];
// // // // //     }
// // // // //   }

// // // // //   return [];
// // // // // };

// // // // // export const CartContextProvider = ({ children }) => {
// // // // //   // 🔐 AUTH
// // // // //   const [token, setToken] = useState("");

// // // // //   // 🛒 CART
// // // // //   const [cartItems, setCartItems] = useState(() => {
// // // // //     try {
// // // // //       const saved = localStorage.getItem("cartItems");
// // // // //       if (!saved) return [];
// // // // //       return ensureArray(JSON.parse(saved));
// // // // //     } catch (err) {
// // // // //       console.warn("Failed to load cartItems:", err);
// // // // //       return [];
// // // // //     }
// // // // //   });

// // // // //   // 🌐 BACKEND URL
// // // // //   const backendUrl =
// // // // //     import.meta.env.VITE_BACKEND_URL ?? "http://localhost:4000";

// // // // //   // 🌐 AXIOS INSTANCE (FIXED headers typo)
// // // // //   const api = axios.create({
// // // // //     baseURL: backendUrl,
// // // // //     headers: { "Content-Type": "application/json" }, // ✅ fixed
// // // // //     timeout: 10000,
// // // // //   });

// // // // //   // 🔐 Load token on refresh
// // // // //   useEffect(() => {
// // // // //     const stored = localStorage.getItem("token");
// // // // //     if (stored) setToken(stored);
// // // // //   }, []);

// // // // //   // 🔐 Persist token
// // // // //   useEffect(() => {
// // // // //     if (token) localStorage.setItem("token", token);
// // // // //     else localStorage.removeItem("token");
// // // // //   }, [token]);

// // // // //   // 🛒 Persist cart
// // // // //   useEffect(() => {
// // // // //     localStorage.setItem("cartItems", JSON.stringify(ensureArray(cartItems)));
// // // // //   }, [cartItems]);

// // // // //   // ➕ ADD TO CART
// // // // //   const addToCart = (food) => {
// // // // //     const foodId = String(food.id);

// // // // //     setCartItems((prev) => {
// // // // //       const arr = ensureArray(prev);
// // // // //       const exists = arr.find((item) => String(item.id) === foodId);

// // // // //       if (exists) {
// // // // //         return arr.map((item) =>
// // // // //           String(item.id) === foodId
// // // // //             ? { ...item, qty: item.qty + 1 }
// // // // //             : item
// // // // //         );
// // // // //       }

// // // // //       return [...arr, { ...food, id: foodId, qty: 1 }];
// // // // //     });
// // // // //   };

// // // // //   // ➕ INCREASE QTY
// // // // //   const increaseQty = (id) => {
// // // // //     const sid = String(id);
// // // // //     setCartItems((prev) =>
// // // // //       ensureArray(prev).map((item) =>
// // // // //         String(item.id) === sid
// // // // //           ? { ...item, qty: item.qty + 1 }
// // // // //           : item
// // // // //       )
// // // // //     );
// // // // //   };

// // // // //   // ➖ DECREASE QTY
// // // // //   const decreaseQty = (id) => {
// // // // //     const sid = String(id);
// // // // //     setCartItems((prev) =>
// // // // //       ensureArray(prev).map((item) =>
// // // // //         String(item.id) === sid && item.qty > 1
// // // // //           ? { ...item, qty: item.qty - 1 }
// // // // //           : item
// // // // //       )
// // // // //     );
// // // // //   };

// // // // //   // ❌ REMOVE ITEM
// // // // //   const removeItem = (id) => {
// // // // //     const sid = String(id);
// // // // //     setCartItems((prev) =>
// // // // //       ensureArray(prev).filter((item) => String(item.id) !== sid)
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <CartContext.Provider
// // // // //       value={{
// // // // //         // auth
// // // // //         token,
// // // // //         setToken,

// // // // //         // cart
// // // // //         cartItems,
// // // // //         setCartItems,
// // // // //         addToCart,
// // // // //         increaseQty,
// // // // //         decreaseQty,
// // // // //         removeItem,

// // // // //         // backend
// // // // //         backendUrl,
// // // // //         api,
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // };

// // // // // src/context/CartContext.jsx
// // // // import React, { createContext, useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // /**
// // // //  * ✅ EXPORT THE CORRECT CONTEXT
// // // //  */
// // // // export const CartContext = createContext();

// // // // /**
// // // //  * Helper: always return array
// // // //  */
// // // // const ensureArray = (value) => {
// // // //   if (Array.isArray(value)) return value;

// // // //   if (value && typeof value === "object") {
// // // //     try {
// // // //       return Object.values(value).map((it) => ({
// // // //         ...it,
// // // //         id: it.id !== undefined ? String(it.id) : undefined,
// // // //         qty: Number(it.qty) || 1,
// // // //       }));
// // // //     } catch {
// // // //       return [];
// // // //     }
// // // //   }

// // // //   return [];
// // // // };

// // // // export const CartContextProvider = ({ children }) => {
// // // //   /* =========================
// // // //      🔐 AUTH STATE
// // // //   ========================== */
// // // //   const [token, setToken] = useState("");
// // // //   const [userEmail, setUserEmail] = useState("");

// // // //   /* =========================
// // // //      🛒 CART STATE
// // // //   ========================== */
// // // //   const [cartItems, setCartItems] = useState(() => {
// // // //     try {
// // // //       const saved = localStorage.getItem("cartItems");
// // // //       if (!saved) return [];
// // // //       return ensureArray(JSON.parse(saved));
// // // //     } catch {
// // // //       return [];
// // // //     }
// // // //   });

// // // //   /* =========================
// // // //      🌐 BACKEND
// // // //   ========================== */
// // // //   const backendUrl =
// // // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// // // //   const api = axios.create({
// // // //     baseURL: backendUrl,
// // // //     headers: { "Content-Type": "application/json" },
// // // //     timeout: 10000,
// // // //   });

// // // //   /* =========================
// // // //      🔁 LOAD AUTH ON REFRESH
// // // //   ========================== */
// // // //   useEffect(() => {
// // // //     const storedToken = localStorage.getItem("token");
// // // //     const storedEmail = localStorage.getItem("userEmail");

// // // //     if (storedToken) setToken(storedToken);
// // // //     if (storedEmail) setUserEmail(storedEmail);
// // // //   }, []);

// // // //   /* =========================
// // // //      🔁 PERSIST AUTH
// // // //   ========================== */
// // // //   useEffect(() => {
// // // //     if (token) localStorage.setItem("token", token);
// // // //     else localStorage.removeItem("token");
// // // //   }, [token]);

// // // //   useEffect(() => {
// // // //     if (userEmail) localStorage.setItem("userEmail", userEmail);
// // // //     else localStorage.removeItem("userEmail");
// // // //   }, [userEmail]);

// // // //   /* =========================
// // // //      🔁 PERSIST CART
// // // //   ========================== */
// // // //   useEffect(() => {
// // // //     localStorage.setItem("cartItems", JSON.stringify(ensureArray(cartItems)));
// // // //   }, [cartItems]);

// // // //   /* =========================
// // // //      🛒 CART ACTIONS
// // // //   ========================== */
// // // //   const addToCart = (food) => {
// // // //     const foodId = String(food.id);

// // // //     setCartItems((prev) => {
// // // //       const arr = ensureArray(prev);
// // // //       const exists = arr.find((item) => item.id === foodId);

// // // //       if (exists) {
// // // //         return arr.map((item) =>
// // // //           item.id === foodId ? { ...item, qty: item.qty + 1 } : item
// // // //         );
// // // //       }

// // // //       return [...arr, { ...food, id: foodId, qty: 1 }];
// // // //     });
// // // //   };

// // // //   const increaseQty = (id) => {
// // // //     const sid = String(id);
// // // //     setCartItems((prev) =>
// // // //       ensureArray(prev).map((item) =>
// // // //         item.id === sid ? { ...item, qty: item.qty + 1 } : item
// // // //       )
// // // //     );
// // // //   };

// // // //   const decreaseQty = (id) => {
// // // //     const sid = String(id);
// // // //     setCartItems((prev) =>
// // // //       ensureArray(prev).map((item) =>
// // // //         item.id === sid && item.qty > 1
// // // //           ? { ...item, qty: item.qty - 1 }
// // // //           : item
// // // //       )
// // // //     );
// // // //   };

// // // //   const removeItem = (id) => {
// // // //     const sid = String(id);
// // // //     setCartItems((prev) =>
// // // //       ensureArray(prev).filter((item) => item.id !== sid)
// // // //     );
// // // //   };

// // // //   /* =========================
// // // //      ✅ CONTEXT EXPORT
// // // //   ========================== */
// // // //   return (
// // // //     <CartContext.Provider
// // // //       value={{
// // // //         // auth
// // // //         token,
// // // //         setToken,
// // // //         userEmail,
// // // //         setUserEmail,

// // // //         // cart
// // // //         cartItems,
// // // //         setCartItems,
// // // //         addToCart,
// // // //         increaseQty,
// // // //         decreaseQty,
// // // //         removeItem,

// // // //         // backend
// // // //         backendUrl,
// // // //         api,
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   );
// // // // };
// // // import React, { createContext, useEffect, useState } from "react";
// // // import axios from "axios";

// // // export const CartContext = createContext();

// // // const ensureArray = (value) => {
// // //   if (Array.isArray(value)) return value;
// // //   if (value && typeof value === "object") return Object.values(value);
// // //   return [];
// // // };

// // // export const CartContextProvider = ({ children }) => {
// // //   // 🔐 AUTH
// // //   const [token, setToken] = useState("");
// // //   const [userEmail, setUserEmail] = useState("");

// // //   // 🛒 CART
// // //   const [cartItems, setCartItems] = useState(() => {
// // //     try {
// // //       return JSON.parse(localStorage.getItem("cartItems")) || [];
// // //     } catch {
// // //       return [];
// // //     }
// // //   });

// // //   // 🌐 BACKEND
// // //   const backendUrl =
// // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// // //   const api = axios.create({
// // //     baseURL: backendUrl,
// // //     headers: { "Content-Type": "application/json" },
// // //   });

// // //   // 🔁 LOAD AUTH ON REFRESH
// // //   useEffect(() => {
// // //     const t = localStorage.getItem("token");
// // //     const e = localStorage.getItem("userEmail");

// // //     if (t) setToken(t);
// // //     if (e) setUserEmail(e);
// // //   }, []);

// // //   // 🔁 PERSIST AUTH
// // //   useEffect(() => {
// // //     token
// // //       ? localStorage.setItem("token", token)
// // //       : localStorage.removeItem("token");
// // //   }, [token]);

// // //   useEffect(() => {
// // //     userEmail
// // //       ? localStorage.setItem("userEmail", userEmail)
// // //       : localStorage.removeItem("userEmail");
// // //   }, [userEmail]);

// // //   // 🔁 PERSIST CART
// // //   useEffect(() => {
// // //     localStorage.setItem("cartItems", JSON.stringify(ensureArray(cartItems)));
// // //   }, [cartItems]);

// // //   return (
// // //     <CartContext.Provider
// // //       value={{
// // //         token,
// // //         setToken,
// // //         userEmail,
// // //         setUserEmail,
// // //         cartItems,
// // //         setCartItems,
// // //         backendUrl,
// // //         api,
// // //       }}
// // //     >
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // import React, { createContext, useEffect, useState } from "react";
// // import axios from "axios";

// // export const CartContext = createContext();

// // // helper
// // const ensureArray = (value) => {
// //   if (Array.isArray(value)) return value;
// //   if (value && typeof value === "object") return Object.values(value);
// //   return [];
// // };

// // export const CartContextProvider = ({ children }) => {
// //   /* ======================
// //      🔐 AUTH
// //   ====================== */
// //   const [token, setToken] = useState("");
// //   const [userEmail, setUserEmail] = useState("");

// //   /* ======================
// //      🛒 CART
// //   ====================== */
// //   const [cartItems, setCartItems] = useState(() => {
// //     try {
// //       return JSON.parse(localStorage.getItem("cartItems")) || [];
// //     } catch {
// //       return [];
// //     }
// //   });

// //   /* ======================
// //      🌐 BACKEND
// //   ====================== */
// //   const backendUrl =
// //     import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// //   const api = axios.create({
// //     baseURL: backendUrl,
// //     headers: { "Content-Type": "application/json" },
// //   });

// //   /* ======================
// //      🔁 LOAD AUTH ON REFRESH
// //   ====================== */
// //   useEffect(() => {
// //     const t = localStorage.getItem("token");
// //     const e = localStorage.getItem("userEmail");

// //     if (t) setToken(t);
// //     if (e) setUserEmail(e);
// //   }, []);

// //   /* ======================
// //      🔁 PERSIST AUTH
// //   ====================== */
// //   useEffect(() => {
// //     token
// //       ? localStorage.setItem("token", token)
// //       : localStorage.removeItem("token");
// //   }, [token]);

// //   useEffect(() => {
// //     userEmail
// //       ? localStorage.setItem("userEmail", userEmail)
// //       : localStorage.removeItem("userEmail");
// //   }, [userEmail]);

// //   /* ======================
// //      🔁 PERSIST CART
// //   ====================== */
// //   useEffect(() => {
// //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
// //   }, [cartItems]);

// //   /* ======================
// //      🛒 CART ACTIONS
// //   ====================== */

// //   // ✅ ADD TO CART (MAIN FIX)
// //   const addToCart = (item) => {
// //     setCartItems((prev) => {
// //       const exists = prev.find((i) => i.id === item.id);

// //       if (exists) {
// //         return prev.map((i) =>
// //           i.id === item.id ? { ...i, qty: i.qty + 1 } : i
// //         );
// //       }

// //       return [...prev, { ...item, qty: 1 }];
// //     });
// //   };

// //   // ➕ Increase Qty
// //   const increaseQty = (id) => {
// //     setCartItems((prev) =>
// //       prev.map((i) =>
// //         i.id === id ? { ...i, qty: i.qty + 1 } : i
// //       )
// //     );
// //   };

// //   // ➖ Decrease Qty
// //   const decreaseQty = (id) => {
// //     setCartItems((prev) =>
// //       prev.map((i) =>
// //         i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
// //       )
// //     );
// //   };

// //   // ❌ Remove Item
// //   const removeItem = (id) => {
// //     setCartItems((prev) => prev.filter((i) => i.id !== id));
// //   };

// //   /* ======================
// //      ✅ PROVIDER
// //   ====================== */
// //   return (
// //     <CartContext.Provider
// //       value={{
// //         // auth
// //         token,
// //         setToken,
// //         userEmail,
// //         setUserEmail,

// //         // cart
// //         cartItems,
// //         setCartItems,
// //         addToCart,
// //         increaseQty,
// //         decreaseQty,
// //         removeItem,

// //         // backend
// //         backendUrl,
// //         api,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   /* ======================
//      🔐 AUTH
//   ====================== */
//   const [token, setToken] = useState("");
//   const [userEmail, setUserEmail] = useState("");

//   /* ======================
//      🛒 CART (PER USER)
//   ====================== */
//   const [cartItems, setCartItems] = useState([]);

//   /* ======================
//      🌐 BACKEND
//   ====================== */
//   const backendUrl =
//     import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

//   const api = axios.create({
//     baseURL: backendUrl,
//     headers: { "Content-Type": "application/json" },
//   });

//   /* ======================
//      🔁 LOAD AUTH ON REFRESH
//   ====================== */
//   useEffect(() => {
//     const t = localStorage.getItem("token");
//     const e = localStorage.getItem("userEmail");

//     if (t) setToken(t);
//     if (e) setUserEmail(e);
//   }, []);

//   /* ======================
//      🔁 LOAD CART WHEN EMAIL CHANGES
//   ====================== */
//   useEffect(() => {
//     if (userEmail) {
//       const savedCart =
//         JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];
//       setCartItems(savedCart);
//     } else {
//       setCartItems([]);
//     }
//   }, [userEmail]);

//   /* ======================
//      🔁 PERSIST CART (PER USER)
//   ====================== */
//   useEffect(() => {
//     if (userEmail) {
//       localStorage.setItem(
//         `cart_${userEmail}`,
//         JSON.stringify(cartItems)
//       );
//     }
//   }, [cartItems, userEmail]);

//   /* ======================
//      🛒 CART ACTIONS
//   ====================== */
//   const addToCart = (item) => {
//     setCartItems((prev) => {
//       const exists = prev.find((i) => i.id === item.id);

//       if (exists) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, qty: i.qty + 1 } : i
//         );
//       }

//       return [...prev, { ...item, qty: 1 }];
//     });
//   };

//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((i) =>
//         i.id === id ? { ...i, qty: i.qty + 1 } : i
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((i) =>
//         i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         token,
//         setToken,
//         userEmail,
//         setUserEmail,
//         cartItems,
//         setCartItems,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeItem,
//         backendUrl,
//         api,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
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
