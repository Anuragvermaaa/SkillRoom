// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { googleAuth } from "../../utils/googleApi";

// const BusinessGoogleAuth = ({ closeModal, showToast }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const token = query.get("token");
//     const error = query.get("error");

//     if (token) {
//       localStorage.setItem("token", token);
//       showToast("Google login successful!", "success");
//       setTimeout(() => {
//         navigate("/business/home", { replace: true });
//         closeModal();
//       }, 300);
//     } else if (error) {
//       showToast(error, "error");
//     }
//   }, [location, navigate, showToast, closeModal]);

//   const handleGoogleLogin = async () => {
//     setIsLoading(true);
//     try {
//       const response = await googleAuth("business");
//       window.location.href = response.data.url;
//     } catch (error) {
//       setIsLoading(false);
//       console.error("[BusinessGoogleAuth] Error:", error);
//       showToast(error.response?.data?.message || "Google authentication failed", "error");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg">
//       <div className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in">
//         <button
//           onClick={closeModal}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
//           aria-label="Close"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <h2
//           className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6"
//           style={{
//             background: "linear-gradient(to right, #60a5fa, #a78bfa)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Sign in with Google
//         </h2>
//         <button
//           onClick={handleGoogleLogin}
//           disabled={isLoading}
//           className={`w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base flex items-center justify-center ${
//             isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
//           }`}
//         >
//           {isLoading ? (
//             <span className="flex items-center">
//               <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
//               </svg>
//               Authenticating...
//             </span>
//           ) : (
//             <span className="flex items-center">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
//                 <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
//                 <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
//                 <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
//                 <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
//               </svg>
//               Sign in with Google
//             </span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusinessGoogleAuth;