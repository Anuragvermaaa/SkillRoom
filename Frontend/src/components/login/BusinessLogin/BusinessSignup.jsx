
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessAuthContext } from "../../../Context/BusinessAuthContext";

const BusinessSignup = ({ closeModal, openLoginModal, showToast }) => {
  const { signup } = useContext(BusinessAuthContext) || {};
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    organization: "",
    query: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (!signup) {
    console.error("BusinessAuthContext signup function is undefined");
    showToast("Authentication context not available", "error");
    return <div className="text-red-500 text-center">Error: Authentication context not available</div>;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false, server: false });
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.organization) newErrors.organization = "Organization is required";
    if (!formData.query) newErrors.query = "Query is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        contact: formData.contact,
        email: formData.email,
        organization: formData.organization,
        query: formData.query,
        password: formData.password,
      };
      const response = await signup(payload);
      showToast(response.message || "Signup successful!", "success");
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        organization: "",
        query: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      closeModal();
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      console.error("Business signup error:", err);
      let errorMessage = "Signup failed, please try again";
      if (err.response) {
        if (err.response.status === 404) {
          errorMessage = "Business signup endpoint not found. Please check server configuration.";
        } else if (err.response.status === 400) {
          errorMessage = "Invalid input data. Please check your details.";
        } else if (err.response.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.response.data?.errors) {
          const serverErrors = {};
          err.response.data.errors.forEach((e) => {
            serverErrors[e.param || "server"] = e.msg;
          });
          setErrors(serverErrors);
          return;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }
      showToast(errorMessage, "error");
      setErrors({ server: errorMessage });
    }
  };

  const handleClose = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-700/50 max-h-[80vh] overflow-y-auto animate-fade-in">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6"
        style={{
          background: "linear-gradient(to right, #60a5fa, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Business Sign Up
      </h2>
      {errors.server && (
        <p className="text-red-500 text-sm text-center mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
          {errors.server}
        </p>
      )}
      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div className="relative">
            <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
              First Name
            </label>
            <div className="flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                  errors.firstName ? "border-red-500 animate-shake" : "border-gray-600"
                } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div className="relative">
            <label htmlFor="lastName" className="block text-sm text-gray-300 mb-1">
              Last Name
            </label>
            <div className="flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                  errors.lastName ? "border-red-500 animate-shake" : "border-gray-600"
                } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
              />
            </div>
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="relative">
          <label htmlFor="contact" className="block text-sm text-gray-300 mb-1">
            Contact Number
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.contact ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
            />
          </div>
          {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
            Email
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.email ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="relative">
          <label htmlFor="organization" className="block text-sm text-gray-300 mb-1">
            Name of Organization
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h4"
                />
              </svg>
            </span>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Your organization name"
              value={formData.organization}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.organization ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
            />
          </div>
          {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
        </div>
        <div className="relative">
          <label htmlFor="query" className="block text-sm text-gray-300 mb-1">
            Query
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </span>
            <textarea
              id="query"
              name="query"
              placeholder="Enter your query"
              value={formData.query}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.query ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm min-h-[100px]`}
            />
          </div>
          {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
        </div>
        <div className="relative">
          <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
            Password
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2h8m-8 0a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4"
                />
              </svg>
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.password ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div className="relative">
          <label htmlFor="confirmPassword" className="block text-sm text-gray-300 mb-1">
            Confirm Password
          </label>
          <div className="flex items-center">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2h8m-8 0a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4"
                />
              </svg>
            </span>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                errors.confirmPassword ? "border-red-500 animate-shake" : "border-gray-600"
              } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base flex items-center justify-center ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
              </svg>
              Signing up...
            </span>
          ) : (
            "Submit"
          )}
        </button>
        <p className="text-center text-gray-300 text-sm">
          Already have a business account?{" "}
          <button
            onClick={() => openLoginModal("business")}
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default BusinessSignup;




// import React, { useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BusinessAuthContext } from "../../../Context/BusinessAuthContext";

// const BusinessSignup = ({ closeModal, openLoginModal, showToast }) => {
//   const { signup } = useContext(BusinessAuthContext) || {};
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     contact: "",
//     email: "",
//     organization: "",
//     query: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // UseEffect only for context check, no infinite triggers
//   useEffect(() => {
//     if (!signup) {
//       showToast("Authentication context not available", "error");
//     }
//   }, [signup]); // Dependency on signup to avoid re-renders if context changes

//   if (!signup) {
//     return <div className="text-red-500 text-center">Error: Authentication context not available</div>;
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: false, server: false }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.lastName) newErrors.lastName = "Last name is required";
//     if (!formData.contact) newErrors.contact = "Contact is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.organization) newErrors.organization = "Organization is required";
//     if (!formData.query) newErrors.query = "Query is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const payload = {
//         firstname: formData.firstName,
//         lastname: formData.lastName,
//         contact: formData.contact,
//         email: formData.email,
//         organization: formData.organization,
//         query: formData.query,
//         password: formData.password,
//       };
//       const response = await signup(payload);
//       showToast(response.message || "Signup successful!", "success");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         contact: "",
//         email: "",
//         organization: "",
//         query: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setErrors({});
//       closeModal();
//       navigate("/"); // Redirect to home, not forgot-password
//     } catch (err) {
//       setIsLoading(false);
//       console.error("Business signup error:", err);
//       let errorMessage = "Signup failed, please try again";
//       if (err.response) {
//         if (err.response.status === 404) {
//           errorMessage = "Business signup endpoint not found. Please check server configuration.";
//         } else if (err.response.status === 400) {
//           errorMessage = "Invalid input data. Please check your details.";
//         } else if (err.response.data?.message) {
//           errorMessage = err.response.data.message;
//         } else if (err.response.data?.errors) {
//           const serverErrors = {};
//           err.response.data.errors.forEach((e) => {
//             serverErrors[e.param || "server"] = e.msg;
//           });
//           setErrors(serverErrors);
//           return;
//         }
//       } else if (err.message) {
//         errorMessage = err.message;
//       }
//       showToast(errorMessage, "error");
//       setErrors({ server: errorMessage });
//     }
//   };

//   const handleClose = () => {
//     closeModal();
//     navigate("/"); // Ensure redirect is to home, not forgot-password
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-700/50 max-h-[80vh] overflow-y-auto animate-fade-in">
//       <button
//         onClick={handleClose}
//         className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
//       >
//         <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//       <h2
//         className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6"
//         style={{
//           background: "linear-gradient(to right, #60a5fa, #a78bfa)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Business Sign Up
//       </h2>
//       {errors.server && (
//         <p className="text-red-500 text-sm text-center mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
//           {errors.server}
//         </p>
//       )}
//       <div className="space-y-4 sm:space-y-5">
//         <div className="grid grid-cols-2 gap-2 sm:gap-4">
//           <div className="relative">
//             <label htmlFor="firstName" className="block text-sm text-gray-300 mb-1">
//               First Name
//             </label>
//             <div className="flex items-center">
//               <span className="absolute left-3 text-gray-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="First name"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                   errors.firstName ? "border-red-500 animate-shake" : "border-gray-600"
//                 } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//               />
//             </div>
//             {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//           </div>
//           <div className="relative">
//             <label htmlFor="lastName" className="block text-sm text-gray-300 mb-1">
//               Last Name
//             </label>
//             <div className="flex items-center">
//               <span className="absolute left-3 text-gray-400">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Last name"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                   errors.lastName ? "border-red-500 animate-shake" : "border-gray-600"
//                 } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//               />
//             </div>
//             {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//           </div>
//         </div>
//         <div className="relative">
//           <label htmlFor="contact" className="block text-sm text-gray-300 mb-1">
//             Contact Number
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//             </span>
//             <input
//               type="tel"
//               id="contact"
//               name="contact"
//               placeholder="Enter your contact number"
//               value={formData.contact}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.contact ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//             />
//           </div>
//           {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
//         </div>
//         <div className="relative">
//           <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
//             Email
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//             </span>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.email ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//             />
//           </div>
//           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//         </div>
//         <div className="relative">
//           <label htmlFor="organization" className="block text-sm text-gray-300 mb-1">
//             Organization
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h-4m-6 0H5m4-4h6m-6-4h6m-6-4h6"
//                 />
//               </svg>
//             </span>
//             <input
//               type="text"
//               id="organization"
//               name="organization"
//               placeholder="Enter your organization"
//               value={formData.organization}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.organization ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//             />
//           </div>
//           {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
//         </div>
//         <div className="relative">
//           <label htmlFor="query" className="block text-sm text-gray-300 mb-1">
//             Query
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </span>
//             <textarea
//               id="query"
//               name="query"
//               placeholder="Enter your query"
//               value={formData.query}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.query ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm resize-y min-h-[80px]`}
//             />
//           </div>
//           {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
//         </div>
//         <div className="relative">
//           <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
//             Password
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2h8m-8 0a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4"
//                 />
//               </svg>
//             </span>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.password ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//             />
//           </div>
//           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//         </div>
//         <div className="relative">
//           <label htmlFor="confirmPassword" className="block text-sm text-gray-300 mb-1">
//             Confirm Password
//           </label>
//           <div className="flex items-center">
//             <span className="absolute left-3 text-gray-400">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-6-4c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4m-2 2h8m-8 0a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6a4 4 0 01-4 4"
//                 />
//               </svg>
//             </span>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               className={`w-full pl-10 sm:pl-12 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
//                 errors.confirmPassword ? "border-red-500 animate-shake" : "border-gray-600"
//               } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
//             />
//           </div>
//           {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
//         </div>
//         <button
//           type="submit"
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
//               Signing up...
//             </span>
//           ) : (
//             "Submit"
//           )}
//         </button>
//         <button
//           onClick={() => navigate("/business/google-auth")}
//           className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base flex items-center justify-center hover:scale-105"
//         >
//           <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
//             <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
//             <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
//             <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
//             <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
//           </svg>
//           Signup with Gmail
//         </button>
//         <p className="text-center text-gray-300 text-sm">
//           Already have an account?{" "}
//           <button
//             onClick={() => openLoginModal("business")}
//             className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default BusinessSignup;