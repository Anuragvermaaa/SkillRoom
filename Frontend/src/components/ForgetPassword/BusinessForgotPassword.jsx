import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitForgotPassword } from "../../utils/forgotApi";

const BusinessForgotPassword = ({ closeModal, showToast }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: "Email is required" });
      showToast("Email is required", "error");
      return;
    }
    setIsLoading(true);
    try {
      await submitForgotPassword({ email, type: "business" });
      showToast("OTP sent to your email!", "success");
      setErrors({});
      localStorage.setItem("forgotEmail", email);
      console.log(`Navigating to /business/verify-otp with email: ${email}`);
      setTimeout(() => {
        navigate("/business/verify-otp", { state: { email }, replace: true });
        closeModal();
      }, 300);
    } catch (err) {
      setIsLoading(false);
      console.error("API Error:", {
        status: err.status,
        message: err.message,
      });
      const errorMessage = err.status === 429
        ? err.message
        : err.status === 404
        ? "Email not registered"
        : err.message || "Failed to send OTP";
      showToast(errorMessage, "error");
      setErrors({ server: errorMessage });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg">
      <div className="relative w-[90%] max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800/50 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-700/50 animate-fade-in">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Close"
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
          Forgot Password
        </h2>
        {errors.server && (
          <p className="text-red-500 text-sm text-center mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
            {errors.server}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                  errors.email ? "border-red-500 animate-shake" : "border-gray-600"
                } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
                disabled={isLoading}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-6 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base flex items-center justify-center ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z" />
                </svg>
                Sending OTP...
              </span>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessForgotPassword;