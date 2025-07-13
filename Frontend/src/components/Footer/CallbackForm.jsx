
import React from "react";
import useForm from "../../utils/useForm";
import { submitCallback } from "../../utils/api";

const CallbackForm = ({ showToast }) => {
  const initialValues = { name: "", contact: "", email: "" };
  const { formData, errors, isLoading, handleInputChange, handleSubmit } = useForm(
    initialValues,
    submitCallback,
    showToast
  );

  return (
    <div className="md:col-span-1">
      <h1 className="mb-4 text-2xl font-bold text-white">Request a Callback</h1>
      {errors.server && (
        <p className="text-red-500 text-sm mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
          {errors.server}
        </p>
      )}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          aria-label="Your Name"
          className={`p-3 rounded-md bg-gray-800 text-gray-200 border ${
            errors.name ? "border-red-500 animate-shake" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="Your Contact Number"
          aria-label="Your Contact Number"
          className={`p-3 rounded-md bg-gray-800 text-gray-200 border ${
            errors.contact ? "border-red-500 animate-shake" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
        />
        {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email (Optional)"
          aria-label="Your Email"
          className={`p-3 rounded-md bg-gray-800 text-gray-200 border ${
            errors.email ? "border-red-500 animate-shake" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CallbackForm;

