import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPassword } from "../../utils/forgotApi";

const UserResetPassword = ({ closeModal, showToast }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("forgotEmail");
  const token = location.state?.token || localStorage.getItem("forgotToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (!password) {
      setErrors({ password: "Password is required" });
      showToast("Password is required", "error");
      return;
    }
    if (!confirmPassword) {
      setErrors({ confirmPassword: "Confirm Password is required" });
      showToast("Confirm Password is required", "error");
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      showToast("Passwords do not match", "error");
      return;
    }
    if (!email || !token) {
      setErrors({ server: "Email or token missing. Please start over" });
      showToast("Email or token missing. Please start over", "error");
      navigate("/users/forgot-password", { replace: true });
      return;
    }
    setIsLoading(true);
    try {
      await resetPassword({ password, token, type: "user" });
      showToast("Password reset successfully!", "success");
      setErrors({});
      localStorage.removeItem("forgotEmail");
      localStorage.removeItem("forgotToken");
      console.log(`Navigating to /users/login after password reset`);
      setTimeout(() => {
        navigate("/users/login", { replace: true });
        closeModal();
      }, 300);
    } catch (err) {
      setIsLoading(false);
      console.error("API Error:", {
        status: err.status,
        message: err.message,
      });
      const errorMessage = err.status === 404
        ? "User not found"
        : err.message || "Failed to reset password";
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
          Reset Password
        </h2>
        {errors.server && (
          <p className="text-red-500 text-sm text-center mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
            {errors.server}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              New Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 .896 2 2zM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                  errors.password ? "border-red-500 animate-shake" : "border-gray-600"
                } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
                disabled={isLoading}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 .896 2 2zM12 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full pl-10 p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
                  errors.confirmPassword ? "border-red-500 animate-shake" : "border-gray-600"
                } focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
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
                Resetting Password...
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserResetPassword;