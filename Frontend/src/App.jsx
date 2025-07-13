
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import UserAuthProvider from "./Context/UserAuthContext.jsx";
import BusinessAuthProvider from "./Context/BusinessAuthContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import BusinessPartnership from "./components/Partnership/Partnership.jsx";
import Careers from "./components/Careers/Careers.jsx";
import Contact from "./components/Contact/Contact.jsx";
import UserLogin from "./components/login/UserLogin/UserLogin.jsx";
import UserSignup from "./components/login/UserLogin/UserSignup.jsx";
import BusinessLogin from "./components/login/BusinessLogin/BusinessLogin.jsx";
import BusinessSignup from "./components/login/BusinessLogin/BusinessSignup.jsx";
import UserForgotPassword from "./components/ForgetPassword/UserForgotPassword.jsx";
import UserVerifyOtp from "./components/ForgetPassword/UserVerifyOtp.jsx";
import UserGoogleAuth from "./Context/UserGoogleAuth.jsx";
import UserResetPassword from "./components/ForgetPassword/UserResetPassword.jsx";
import BusinessForgotPassword from "./components/ForgetPassword/BusinessForgotPassword.jsx";
import BusinessVerifyOtp from "./components/ForgetPassword/BusinessVerifyOtp.jsx";
import BusinessGoogleAuth from "./Context/BusinessGoogleAuth.jsx";
import BusinessResetPassword from "./components/ForgetPassword/BusinessResetPassword.jsx";
import Toast from "./components/Toast.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { email, token } = location.state || {};
  const isResetPassword = children.type.name.includes("ResetPassword");
  const isVerifyOtp = children.type.name.includes("VerifyOtp");

  // Fallback to localStorage for email and token
  const storedEmail = localStorage.getItem("forgotEmail");
  const storedToken = localStorage.getItem("forgotToken");
  const effectiveEmail = email || storedEmail;
  const effectiveToken = token || storedToken;

  console.log(`ProtectedRoute: Path=${location.pathname}, Email=${effectiveEmail}, Token=${effectiveToken}`);

  if (!effectiveEmail || (isResetPassword && !effectiveToken)) {
    const redirectPath = children.type.name.includes("User")
      ? "/users/forgot-password"
      : "/business/forgot-password";
    console.log(`Redirecting to ${redirectPath} due to missing ${!effectiveEmail ? "email" : "token"}`);
    return <Navigate to={redirectPath} replace state={{ from: location.pathname }} />;
  }

  // Store email and token in localStorage for refresh handling
  if (effectiveEmail && !localStorage.getItem("forgotEmail")) {
    localStorage.setItem("forgotEmail", effectiveEmail);
  }
  if (effectiveToken && !localStorage.getItem("forgotToken")) {
    localStorage.setItem("forgotToken", effectiveToken);
  }

  return children;
};

const App = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [loginType, setLoginType] = useState("user");
  const [signupType, setSignupType] = useState("user");
  const [toasts, setToasts] = useState([]);

  const openLoginModal = (type) => {
    setIsSignupModalOpen(false);
    setLoginType(type);
    setIsLoginModalOpen(true);
  };

  const openSignupModal = (type) => {
    setIsLoginModalOpen(false);
    setSignupType(type);
    setIsSignupModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ErrorBoundary>
      <Router>
        <UserAuthProvider>
          <BusinessAuthProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar
                openLoginModal={openLoginModal}
                openSignupModal={openSignupModal}
                showToast={showToast}
              />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home showToast={showToast} />} />
                  <Route path="/about" element={<About showToast={showToast} />} />
                  <Route path="/services" element={<Services showToast={showToast} />} />
                  <Route path="/partnership" element={<BusinessPartnership showToast={showToast} />} />
                  <Route path="/careers" element={<Careers showToast={showToast} />} />
                  <Route path="/contact" element={<Contact showToast={showToast} />} />
                  <Route path="/users/login" element={<UserLogin closeModal={closeModal} openSignupModal={openSignupModal} showToast={showToast} />} />
                  <Route path="/users/signup" element={<UserSignup closeModal={closeModal} openLoginModal={openLoginModal} showToast={showToast} />} />
                  <Route path="/business/login" element={<BusinessLogin closeModal={closeModal} openSignupModal={openSignupModal} showToast={showToast} />} />
                  <Route path="/business/signup" element={<BusinessSignup closeModal={closeModal} openLoginModal={openLoginModal} showToast={showToast} />} />
                  <Route path="/users/forgot-password" element={<UserForgotPassword closeModal={closeModal} showToast={showToast} />} />
                  <Route
                    path="/users/verify-otp"
                    element={
                      <ProtectedRoute>
                        <UserVerifyOtp closeModal={closeModal} showToast={showToast} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/users/google-auth" element={<UserGoogleAuth closeModal={closeModal} showToast={showToast} />} />
                  <Route
                    path="/users/reset-password"
                    element={
                      <ProtectedRoute>
                        <UserResetPassword closeModal={closeModal} showToast={showToast} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/business/forgot-password" element={<BusinessForgotPassword closeModal={closeModal} showToast={showToast} />} />
                  <Route
                    path="/business/verify-otp"
                    element={
                      <ProtectedRoute>
                        <BusinessVerifyOtp closeModal={closeModal} showToast={showToast} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/business/google-auth" element={<BusinessGoogleAuth closeModal={closeModal} showToast={showToast} />} />
                  <Route
                    path="/business/reset-password"
                    element={
                      <ProtectedRoute>
                        <BusinessResetPassword closeModal={closeModal} showToast={showToast} />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
                {isLoginModalOpen && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    {loginType === "user" ? (
                      <UserLogin
                        closeModal={closeModal}
                        openSignupModal={openSignupModal}
                        showToast={showToast}
                      />
                    ) : (
                      <BusinessLogin
                        closeModal={closeModal}
                        openSignupModal={openSignupModal}
                        showToast={showToast}
                      />
                    )}
                  </div>
                )}
                {isSignupModalOpen && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    {signupType === "user" ? (
                      <UserSignup
                        closeModal={closeModal}
                        openLoginModal={openLoginModal}
                        showToast={showToast}
                      />
                    ) : (
                      <BusinessSignup
                        closeModal={closeModal}
                        openLoginModal={openLoginModal}
                        showToast={showToast}
                      />
                    )}
                  </div>
                )}
              </main>
              <Footer showToast={showToast} />
              <div className="fixed bottom-4 right-4 space-y-2">
                {toasts.map((toast) => (
                  <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                  />
                ))}
              </div>
            </div>
          </BusinessAuthProvider>
        </UserAuthProvider>
      </Router>
    </ErrorBoundary>
  );
};

export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import UserAuthProvider from "./Context/UserAuthContext.jsx";
// import BusinessAuthProvider from "./Context/BusinessAuthContext.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Home from "./components/Home/Home.jsx";
// import About from "./components/About/About.jsx";
// import Services from "./components/Services/Services.jsx";
// import BusinessPartnership from "./components/Partnership/Partnership.jsx";
// import Careers from "./components/Careers/Careers.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import UserLogin from "./components/login/UserLogin/UserLogin.jsx";
// import UserSignup from "./components/login/UserLogin/UserSignup.jsx";
// import BusinessLogin from "./components/login/BusinessLogin/BusinessLogin.jsx";
// import BusinessSignup from "./components/login/BusinessLogin/BusinessSignup.jsx";
// import UserGoogleAuth from "./Context/UserGoogleAuth.jsx";
// import BusinessGoogleAuth from "./Context/BusinessGoogleAuth.jsx";
// import Toast from "./components/Toast.jsx";
// import ErrorBoundary from "./components/ErrorBoundary";

// // Protected Route (no forgot-password logic)
// const ProtectedRoute = ({ children }) => {
//   return children;
// };

// const App = () => {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [loginType, setLoginType] = useState("user");
//   const [signupType, setSignupType] = useState("user");
//   const [toasts, setToasts] = useState([]);

//   const openLoginModal = (type) => {
//     setIsSignupModalOpen(false);
//     setLoginType(type);
//     setIsLoginModalOpen(true);
//   };

//   const openSignupModal = (type) => {
//     setIsLoginModalOpen(false);
//     setSignupType(type);
//     setIsSignupModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const showToast = (message, type = "success") => {
//     const id = Date.now();
//     setToasts((prev) => [...prev, { id, message, type }]);
//   };

//   const removeToast = (id) => {
//     setToasts((prev) => prev.filter((toast) => toast.id !== id));
//   };

//   return (
//     <ErrorBoundary>
//       <Router>
//         <UserAuthProvider>
//           <BusinessAuthProvider>
//             <div className="flex flex-col min-h-screen">
//               <Navbar
//                 openLoginModal={openLoginModal}
//                 openSignupModal={openSignupModal}
//                 showToast={showToast}
//               />
//               <main className="flex-grow">
//                 <Routes>
//                   <Route path="/" element={<Home showToast={showToast} />} />
//                   <Route path="/about" element={<About showToast={showToast} />} />
//                   <Route path="/services" element={<Services showToast={showToast} />} />
//                   <Route path="/partnership" element={<BusinessPartnership showToast={showToast} />} />
//                   <Route path="/careers" element={<Careers showToast={showToast} />} />
//                   <Route path="/contact" element={<Contact showToast={showToast} />} />
//                   <Route path="/users/login" element={<UserLogin closeModal={closeModal} openSignupModal={openSignupModal} showToast={showToast} />} />
//                   <Route path="/users/signup" element={<UserSignup closeModal={closeModal} openLoginModal={openLoginModal} showToast={showToast} />} />
//                   <Route path="/business/login" element={<BusinessLogin closeModal={closeModal} openSignupModal={openSignupModal} showToast={showToast} />} />
//                   <Route path="/business/signup" element={<BusinessSignup closeModal={closeModal} openLoginModal={openLoginModal} showToast={showToast} />} />
//                   <Route path="/users/google-auth" element={<UserGoogleAuth closeModal={closeModal} showToast={showToast} />} />
//                   <Route path="/business/google-auth" element={<BusinessGoogleAuth closeModal={closeModal} showToast={showToast} />} />
//                   <Route path="/users/forgot-password" element={<div>Method Not Allowed - Use POST</div>} /> {/* Placeholder */}
//                 </Routes>
//                 {isLoginModalOpen && (
//                   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     {loginType === "user" ? (
//                       <UserLogin
//                         closeModal={closeModal}
//                         openSignupModal={openSignupModal}
//                         showToast={showToast}
//                       />
//                     ) : (
//                       <BusinessLogin
//                         closeModal={closeModal}
//                         openSignupModal={openSignupModal}
//                         showToast={showToast}
//                       />
//                     )}
//                   </div>
//                 )}
//                 {isSignupModalOpen && (
//                   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     {signupType === "user" ? (
//                       <UserSignup
//                         closeModal={closeModal}
//                         openLoginModal={openLoginModal}
//                         showToast={showToast}
//                       />
//                     ) : (
//                       <BusinessSignup
//                         closeModal={closeModal}
//                         openLoginModal={openLoginModal}
//                         showToast={showToast}
//                       />
//                     )}
//                   </div>
//                 )}
//               </main>
//               <Footer showToast={showToast} />
//               <div className="fixed bottom-4 right-4 space-y-2">
//                 {toasts.map((toast) => (
//                   <Toast
//                     key={toast.id}
//                     message={toast.message}
//                     type={toast.type}
//                     onClose={() => removeToast(toast.id)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </BusinessAuthProvider>
//         </UserAuthProvider>
//       </Router>
//     </ErrorBoundary>
//   );
// };

// export default App;