
import React from "react";
import useForm from "../../utils/useForm";
import { submitPartnership } from "../../utils/api";

const ContactForm = ({ showToast }) => {
  const initialValues = { name: "", email: "", phone: "", message: "" };
  const { formData, errors, isLoading, handleInputChange, handleSubmit } = useForm(
    initialValues,
    submitPartnership,
    showToast
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-1">Send A Message</h2>
      <p className="text-gray-400 mb-6">
        Have questions or suggestions? We'd love to hear from you. Fill out the
        form below, and we'll get back to you within 24 hours.
      </p>
      {errors.server && (
        <p className="text-red-500 text-sm text-center mb-4 bg-red-900/30 p-2 rounded-md border border-red-500/50">
          {errors.server}
        </p>
      )}
      <div className="space-y-5">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            aria-label="Full Name"
            className={`w-full p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
              errors.name ? "border-red-500 animate-shake" : "border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            aria-label="Email Address"
            className={`w-full p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
              errors.email ? "border-red-500 animate-shake" : "border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            aria-label="Phone Number"
            className={`w-full p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
              errors.phone ? "border-red-500 animate-shake" : "border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            aria-label="Your Message"
            className={`w-full p-3 rounded-md bg-gray-900/50 text-gray-200 border ${
              errors.message ? "border-red-500 animate-shake" : "border-gray-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-gray-500 placeholder:text-sm min-h-[120px]`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
