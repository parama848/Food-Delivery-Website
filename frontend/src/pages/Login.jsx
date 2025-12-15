// // // // // import { toast } from "react-toastify";
// // // // // import { useContext, useEffect, useState } from "react";
// // // // // import { CartContext } from "../context/CartContext";
// // // // // import axios from "axios";

// // // // // const Login = () => {
// // // // //   const [currentState, setCurrentState] = useState("Login");

// // // // //   //for backend
// // // // //   const { token, setToken, navigate, backendUrl } = useContext(CartContext);
// // // // //   const [name, setName] = useState("");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");

// // // // //   const onSubmitHandler = async (event) => {
// // // // //     event.preventDefault();
// // // // //     try {
// // // // //       if (currentState === "Sign Up") {
// // // // //         const response = await axios.post(backendUrl + "/api/user/register", {
// // // // //           name,
// // // // //           email,
// // // // //           password,
// // // // //         });

// // // // //         if (response.data.success) {
// // // // //           console.log(response.data);

// // // // //           setToken(response.data.token);
// // // // //           localStorage.setItem("token", response.data.token);
// // // // //         } else {
// // // // //           const response = await axios.post(backendUrl + "/api/user/login", {
// // // // //             email,
// // // // //             password,
// // // // //           });

// // // // //           if (response.data.sucess) {
// // // // //             console.log(response.data);
// // // // //             setToken(response.data.token);
// // // // //             localStorage.setItem("token", response.data.token);
// // // // //           } else {
// // // // //             toast.error(response.data.message);
// // // // //           }
// // // // //         }
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //       toast.error(error.message);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (token) {
// // // // //       navigate("/");
// // // // //     }
// // // // //   }, [token]);

// // // // //   return (
// // // // //     <form
// // // // //       onSubmit={onSubmitHandler}
// // // // //       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border p-5 rounded-lg"
// // // // //     >
// // // // //       <div className="inline-flex items-center gap-2 mb-2 mt-10">
// // // // //         <p className="text-3xl text-center">{currentState}</p>
// // // // //         <hr className="border-none h-[1.5px w-8 bg-gray-800]" />
// // // // //       </div>
// // // // //       {currentState === "Login" ? (
// // // // //         ""
// // // // //       ) : (
// // // // //         <input
// // // // //           onChange={(e) => setName(e.target.value)}
// // // // //           value={name}
// // // // //           type="text"
// // // // //           className="w-full px-3 py-2 border border-gray-800"
// // // // //           placeholder="Name"
// // // // //           required
// // // // //         />
// // // // //       )}
// // // // //       <input
// // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // //         value={email}
// // // // //         type="email"
// // // // //         className="w-full px-3 py-2 border border-gray-800"
// // // // //         placeholder="Email"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // //         value={password}
// // // // //         type="password"
// // // // //         className="w-full px-3 py-2 border border-gray-800"
// // // // //         placeholder="Password"
// // // // //         required
// // // // //       />
// // // // //       <div className="w-full justify-between text-sm mt-[-8px]">
// // // // //         <div className="flex justify-between">
// // // // //           <p className="cursor-pointer">Forgot your password</p>{" "}
// // // // //           {currentState === "Login" ? (
// // // // //             <p
// // // // //               onClick={() => setCurrentState("Sign Up")}
// // // // //               className="cursor-pointer text-red-300"
// // // // //             >
// // // // //               Create account
// // // // //             </p>
// // // // //           ) : (
// // // // //             <p
// // // // //               onClick={() => setCurrentState("Login")}
// // // // //               className="cursor-pointer "
// // // // //             >
// // // // //               Login Here
// // // // //             </p>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //       <button className="bg-black text-white font-light px-8 py-2 mt-4 ">
// // // // //         {currentState === "Login" ? "Sign In" : "Sign Up"}
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // };


// // // // // export default Login;

// // // // import { toast } from "react-toastify";
// // // // import { useContext, useEffect, useState } from "react";
// // // // import { CartContext } from "../context/CartContext";
// // // // import axios from "axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Login = () => {
// // // //   const [currentState, setCurrentState] = useState("Login");

// // // //   // ✅ get only data from context (NO navigate here)
// // // //   const { token, setToken, backendUrl, setUserEmail } =
// // // //     useContext(CartContext);

// // // //   const navigate = useNavigate(); // ✅ CORRECT

// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const onSubmitHandler = async (event) => {
// // // //     event.preventDefault();

// // // //     try {
// // // //       // ✅ SIGN UP
// // // //       if (currentState === "Sign Up") {
// // // //         const res = await axios.post(
// // // //           `${backendUrl}/api/user/register`,
// // // //           { name, email, password }
// // // //         );

// // // //         if (res.data.success) {
// // // //           setToken(res.data.token);
// // // //           setUserEmail(res.data.email);

// // // //           localStorage.setItem("token", res.data.token);
// // // //           localStorage.setItem("userEmail", res.data.email);

// // // //           toast.success("Account created successfully");
// // // //           navigate("/");
// // // //         } else {
// // // //           toast.error(res.data.message);
// // // //         }
// // // //       }

// // // //       // ✅ LOGIN
// // // //       if (currentState === "Login") {
// // // //         const res = await axios.post(
// // // //           `${backendUrl}/api/user/login`,
// // // //           { email, password }
// // // //         );

// // // //         if (res.data.success) {
// // // //           setToken(res.data.token);
// // // //           setUserEmail(res.data.email);

// // // //           localStorage.setItem("token", res.data.token);
// // // //           localStorage.setItem("userEmail", res.data.email);

// // // //           toast.success("Login successful");
// // // //           navigate("/");
// // // //         } else {
// // // //           toast.error(res.data.message);
// // // //         }
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       toast.error("Something went wrong");
// // // //     }
// // // //   };

// // // //   // ✅ If already logged in → redirect
// // // //   useEffect(() => {
// // // //     if (token) {
// // // //       navigate("/");
// // // //     }
// // // //   }, [token, navigate]);

// // // //   return (
// // // //     <form
// // // //       onSubmit={onSubmitHandler}
// // // //       className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 border p-5 rounded-lg"
// // // //     >
// // // //       <div className="inline-flex items-center gap-2 mb-2 mt-10">
// // // //         <p className="text-3xl text-center">{currentState}</p>
// // // //       </div>

// // // //       {currentState === "Sign Up" && (
// // // //         <input
// // // //           onChange={(e) => setName(e.target.value)}
// // // //           value={name}
// // // //           type="text"
// // // //           className="w-full px-3 py-2 border border-gray-800"
// // // //           placeholder="Name"
// // // //           required
// // // //         />
// // // //       )}

// // // //       <input
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //         value={email}
// // // //         type="email"
// // // //         className="w-full px-3 py-2 border border-gray-800"
// // // //         placeholder="Email"
// // // //         required
// // // //       />

// // // //       <input
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //         value={password}
// // // //         type="password"
// // // //         className="w-full px-3 py-2 border border-gray-800"
// // // //         placeholder="Password"
// // // //         required
// // // //       />

// // // //       <div className="w-full flex justify-between text-sm">
// // // //         <p className="cursor-pointer">Forgot your password?</p>

// // // //         {currentState === "Login" ? (
// // // //           <p
// // // //             onClick={() => setCurrentState("Sign Up")}
// // // //             className="cursor-pointer text-green-600"
// // // //           >
// // // //             Create account
// // // //           </p>
// // // //         ) : (
// // // //           <p
// // // //             onClick={() => setCurrentState("Login")}
// // // //             className="cursor-pointer text-green-600"
// // // //           >
// // // //             Login here
// // // //           </p>
// // // //         )}
// // // //       </div>

// // // //       <button className="bg-black text-white px-8 py-2 mt-4 rounded">
// // // //         {currentState === "Login" ? "Sign In" : "Sign Up"}
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default Login;


// // // // src/pages/Login.jsx
// // // import { useContext, useEffect, useState } from "react";
// // // import { CartContext } from "../context/CartContext";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";

// // // const Login = () => {
// // //   const [mode, setMode] = useState("Login"); // Login | Sign Up

// // //   const { token, setToken, backendUrl, setUserEmail } =
// // //     useContext(CartContext);

// // //   const navigate = useNavigate();

// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   // ✅ If already logged in → go home
// // //   useEffect(() => {
// // //     if (token) {
// // //       navigate("/");
// // //     //   setUserEmail("T");
// // //     }
// // //   }, [token, navigate,setUserEmail]);

// // //   const submitHandler = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       // ---------- SIGN UP ----------
// // //       if (mode === "Sign Up") {
// // //         const res = await axios.post(
// // //           `${backendUrl}/api/user/register`,
// // //           { name, email, password }
// // //         );

// // //         if (res.data.success) {
// // //           setToken(res.data.token);
// // //           setUserEmail(res.data.email);

// // //           localStorage.setItem("token", res.data.token);
// // //           localStorage.setItem("userEmail", res.data.email);

// // //           toast.success("Account created successfully");
// // //           navigate("/");
// // //         } else {
// // //           toast.error(res.data.message);
// // //         }
// // //       }

// // //       // ---------- LOGIN ----------
// // //       if (mode === "Login") {
// // //         const res = await axios.post(
// // //           `${backendUrl}/api/user/login`,
// // //           { email, password }
// // //         );

// // //         if (res.data.success) {
// // //           setToken(res.data.token);
// // //           setUserEmail(res.data.email);

// // //           localStorage.setItem("token", res.data.token);
// // //           localStorage.setItem("userEmail", res.data.email);

// // //           toast.success("Login successful");
// // //           navigate("/");
// // //         } else {
// // //           toast.error(res.data.message);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error("Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-[70vh] flex items-center justify-center">
// // //       <form
// // //         onSubmit={submitHandler}
// // //         className="w-[90%] sm:max-w-96 border p-6 rounded-lg shadow-md bg-white"
// // //       >
// // //         <h2 className="text-2xl font-bold text-center mb-4">
// // //           {mode}
// // //         </h2>

// // //         {mode === "Sign Up" && (
// // //           <input
// // //             type="text"
// // //             placeholder="Name"
// // //             className="w-full mb-3 px-3 py-2 border"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             required
// // //           />
// // //         )}

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="w-full mb-3 px-3 py-2 border"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           className="w-full mb-4 px-3 py-2 border"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           required
// // //         />

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-black text-white py-2 rounded"
// // //         >
// // //           {mode === "Login" ? "Sign In" : "Create Account"}
// // //         </button>

// // //         <div className="text-sm mt-4 flex justify-between">
// // //           <span className="cursor-pointer text-gray-500">
// // //             Forgot password?
// // //           </span>

// // //           {mode === "Login" ? (
// // //             <span
// // //               className="cursor-pointer text-green-600"
// // //               onClick={() => setMode("Sign Up")}
// // //             >
// // //               Create account
// // //             </span>
// // //           ) : (
// // //             <span
// // //               className="cursor-pointer text-green-600"
// // //               onClick={() => setMode("Login")}
// // //             >
// // //               Login here
// // //             </span>
// // //           )}
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import { useContext, useEffect, useState } from "react";
// // import { CartContext } from "../context/CartContext";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const Login = () => {
// //   const [mode, setMode] = useState("Login"); // Login | Sign Up

// //   const { token, setToken, backendUrl, setUserEmail } =
// //     useContext(CartContext);

// //   const navigate = useNavigate();

// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   // ✅ If already logged in → go home
// //   useEffect(() => {
// //     if (token) {
// //       navigate("/");
// //     }
// //   }, [token, navigate]);

// //   const submitHandler = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // ================= SIGN UP =================
// //       if (mode === "Sign Up") {
// //         const res = await axios.post(
// //           `${backendUrl}/api/user/register`,
// //           { name, email, password }
// //         );

// //         if (res.data.success) {
// //           // ✅ SAVE AUTH DATA
// //           setToken(res.data.token);
// //           setUserEmail(res.data.email);

// //           localStorage.setItem("token", res.data.token);
// //           localStorage.setItem("userEmail", res.data.email);

// //           toast.success("Account created successfully");
// //           navigate("/");
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       }

// //       // ================= LOGIN =================
// //       if (mode === "Login") {
// //         const res = await axios.post(
// //           `${backendUrl}/api/user/login`,
// //           { email, password }
// //         );

// //         if (res.data.success) {
// //           // ✅ SAVE AUTH DATA
// //           setToken(res.data.token);
// //           setUserEmail(res.data.email);

// //           localStorage.setItem("token", res.data.token);
// //           localStorage.setItem("userEmail", res.data.email);

// //           toast.success("Login successful");
// //           navigate("/");
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="min-h-[70vh] flex items-center justify-center">
// //       <form
// //         onSubmit={submitHandler}
// //         className="w-[90%] sm:max-w-96 border p-6 rounded-lg shadow-md bg-white"
// //       >
// //         <h2 className="text-2xl font-bold text-center mb-4">
// //           {mode}
// //         </h2>

// //         {mode === "Sign Up" && (
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             className="w-full mb-3 px-3 py-2 border"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         )}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="w-full mb-3 px-3 py-2 border"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full mb-4 px-3 py-2 border"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-black text-white py-2 rounded"
// //         >
// //           {mode === "Login" ? "Sign In" : "Create Account"}
// //         </button>

// //         <div className="text-sm mt-4 flex justify-between">
// //           <span className="cursor-pointer text-gray-500">
// //             Forgot password?
// //           </span>

// //           {mode === "Login" ? (
// //             <span
// //               className="cursor-pointer text-green-600"
// //               onClick={() => setMode("Sign Up")}
// //             >
// //               Create account
// //             </span>
// //           ) : (
// //             <span
// //               className="cursor-pointer text-green-600"
// //               onClick={() => setMode("Login")}
// //             >
// //               Login here
// //             </span>
// //           )}
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [mode, setMode] = useState("Login"); // Login | Sign Up

//   const { token, setToken, backendUrl, setUserEmail } =
//     useContext(CartContext);

//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ✅ If already logged in → go home
//   useEffect(() => {
//     if (token) {
//       navigate("/");
//     }
//   }, [token, navigate]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       /* ================= SIGN UP ================= */
//       if (mode === "Sign Up") {
//         const res = await axios.post(
//           `${backendUrl}/api/user/register`,
//           { name, email, password }
//         );

//         if (res.data.success) {
//           setToken(res.data.token);
//           setUserEmail(email); // ✅ FIX

//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("userEmail", email); // ✅ FIX

//           toast.success("Account created successfully");
//           navigate("/");
//         } else {
//           toast.error(res.data.message);
//         }
//       }

//       /* ================= LOGIN ================= */
//       if (mode === "Login") {
//         const res = await axios.post(
//           `${backendUrl}/api/user/login`,
//           { email, password }
//         );

//         if (res.data.success) {
//           setToken(res.data.token);
//           setUserEmail(email); // ✅ FIX

//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("userEmail", email); // ✅ FIX

//           toast.success("Login successful");
//           navigate("/");
//         } else {
//           toast.error(res.data.message);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-[70vh] flex items-center justify-center">
//       <form
//         onSubmit={submitHandler}
//         className="w-[90%] sm:max-w-96 border p-6 rounded-lg shadow-md bg-white"
//       >
//         <h2 className="text-2xl font-bold text-center mb-4">{mode}</h2>

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

//         <button
//           type="submit"
//           className="w-full bg-black text-white py-2 rounded"
//         >
//           {mode === "Login" ? "Sign In" : "Create Account"}
//         </button>

//         <div className="text-sm mt-4 flex justify-between">
//           <span className="text-gray-500 cursor-pointer">
//             Forgot password?
//           </span>

//           {mode === "Login" ? (
//             <span
//               className="cursor-pointer text-green-600"
//               onClick={() => setMode("Sign Up")}
//             >
//               Create account
//             </span>
//           ) : (
//             <span
//               className="cursor-pointer text-green-600"
//               onClick={() => setMode("Login")}
//             >
//               Login here
//             </span>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [mode, setMode] = useState("Login");

  const { token, setToken, backendUrl, setUserEmail } =
    useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if logged in
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (mode === "Sign Up") {
        const res = await axios.post(
          `${backendUrl}/api/user/register`,
          { name, email, password }
        );

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
        const res = await axios.post(
          `${backendUrl}/api/user/login`,
          { email, password }
        );

        if (res.data.success) {
          setToken(res.data.token);
          setUserEmail(email);

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userEmail", email);

          toast.success("Login successful");
          navigate("/");
        }
      }
    } catch {
      toast.error("Something went wrong");
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
            {mode === "Login" ? "Create account" : "Login here"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
