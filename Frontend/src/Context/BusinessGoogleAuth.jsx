import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BusinessGoogleAuth = ({ closeModal, showToast }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    if (token) {
      localStorage.setItem("forgotToken", token); // Store token for reset password
      showToast("Google authentication successful! [forgot]", "success");
      navigate("/business/reset-password");
    } else {
      showToast("Google authentication failed [forgot]", "error");
      navigate("/business/forgot-password");
    }
  }, [location, navigate, showToast]);

  return (
    <div className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in">
      <h2
        className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-4 sm:mb-6"
        style={{
          background: "linear-gradient(to right, #60a5fa, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Google Authentication [forgot]
      </h2>
      <p className="text-gray-300 text-center">Redirecting...</p>
    </div>
  );
};

export default BusinessGoogleAuth;