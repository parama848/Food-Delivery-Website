// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [mode, setMode] = useState("Login");

//   const { token, setToken, backendUrl, setUserEmail } =
//     useContext(CartContext);

//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Redirect if logged in
//   useEffect(() => {
//     if (token) navigate("/");
//   }, [token, navigate]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       if (mode === "Sign Up") {
//         const res = await axios.post(
//           `${backendUrl}/api/user/register`,
//           { name, email, password }
//         );

//         if (res.data.success) {
//           setToken(res.data.token);
//           setUserEmail(email);

//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("userEmail", email);

//           toast.success("Account created");
//           navigate("/");
//         }
//       }

//       if (mode === "Login") {
//         const res = await axios.post(
//           `${backendUrl}/api/user/login`,
//           { email, password }
//         );

//         if (res.data.success) {
//           setToken(res.data.token);
//           setUserEmail(email);

//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("userEmail", email);

//           toast.success("Login successful");
//           navigate("/");
//         }
//       }
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-[80vh] flex items-center justify-center">
//       <form
//         onSubmit={submitHandler}
//         className="w-[90%] sm:max-w-96 border p-6 rounded-lg shadow-md bg-white"
//       >
//         <h2 className="text-2xl font-bold text-center mb-5">
//           {mode}
//         </h2>

//         {mode === "Sign Up" && (
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full mb-3 px-3 py-2 border"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-3 px-3 py-2 border"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 px-3 py-2 border"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button className="w-full bg-black text-white py-2 rounded">
//           {mode === "Login" ? "Sign In" : "Create Account"}
//         </button>

//         <div className="text-sm mt-4 flex justify-between">
//           <span className="text-gray-500">Forgot password?</span>
//           <span
//             className="cursor-pointer text-green-600"
//             onClick={() =>
//               setMode(mode === "Login" ? "Sign Up" : "Login")
//             }
//           >
//             {mode === "Login" ? "Create account" : "Login here"}
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [mode, setMode] = useState("Login");

  const {
    token,
    setToken,
    backendUrl, // still available if needed
    setUserEmail,
    api, // ✅ use shared axios instance
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ======================
     🔁 REDIRECT IF LOGGED IN
  ====================== */
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  /* ======================
     🔐 SUBMIT HANDLER
  ====================== */
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (mode === "Sign Up") {
        const res = await api.post("/api/user/register", {
          name,
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          setUserEmail(email);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", email);

          toast.success("Account created");
          navigate("/");
        }
      }

      if (mode === "Login") {
        const res = await api.post("/api/user/login", {
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          setUserEmail(email);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", email);

          toast.success("Login successful");
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="w-[90%] sm:max-w-96 border p-6 rounded-lg shadow-md bg-white"
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          {mode}
        </h2>

        {mode === "Sign Up" && (
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 px-3 py-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-black text-white py-2 rounded">
          {mode === "Login" ? "Sign In" : "Create Account"}
        </button>

        <div className="text-sm mt-4 flex justify-between">
          <span className="text-gray-500">Forgot password?</span>
          <span
            className="cursor-pointer text-green-600"
            onClick={() =>
              setMode(mode === "Login" ? "Sign Up" : "Login")
            }
          >
            {mode === "Login"
              ? "Create account"
              : "Login here"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
