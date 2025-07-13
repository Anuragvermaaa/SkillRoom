
import React from "react";
import useForm from "../../utils/useForm";
import { submitBusinessPartnership } from "../../utils/api";

const ContactSection = ({ showToast }) => {
  const initialValues = { orgName: "", name: "", email: "", message: "" };
  const { formData, errors, isLoading, handleInputChange, handleSubmit } = useForm(
    initialValues,
    submitBusinessPartnership,
    showToast
  );

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-16 bg-white text-center max-w-7xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-2"
      >
        Begin Your Partnership Journey
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 animate-fade-in">
        Whether you're an institution, business, or learning platform, our
        tailored collaboration opportunities are designed to create lasting
        value and measurable impact.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 animate-fade-in animation-delay-200">
        Share your vision with us—let's work together to build scalable training
        experiences, foster talent, and drive transformative outcomes across
        industries.
      </p>
      <div className="max-w-2xl mx-auto space-y-6">
        {errors.server && (
          <p className="text-pink-500 text-sm bg-pink-100/50 p-3 rounded-lg">
            {errors.server}
          </p>
        )}
        <div>
          <input
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={handleInputChange}
            placeholder="Organization Name"
            className={`w-full p-4 bg-gray-50 border-2 ${
              errors.orgName ? "border-pink-500" : "border-cyan-500/30"
            } rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            aria-label="Organization Name"
          />
          {errors.orgName && (
            <p className="text-pink-500 text-sm mt-2">{errors.orgName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className={`w-full p-4 bg-gray-50 border-2 ${
              errors.name ? "border-pink-500" : "border-cyan-500/30"
            } rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            aria-label="Your Name"
          />
          {errors.name && (
            <p className="text-pink-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className={`w-full p-4 bg-gray-50 border-2 ${
              errors.email ? "border-pink-500" : "border-cyan-500/30"
            } rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            aria-label="Your Email"
          />
          {errors.email && (
            <p className="text-pink-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your partnership goals"
            className={`w-full p-4 bg-gray-50 border-2 ${
              errors.message ? "border-pink-500" : "border-cyan-500/30"
            } rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            rows="6"
            aria-label="Your Message or Query"
          ></textarea>
          {errors.message && (
            <p className="text-pink-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full p-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : "animate-pulse"
          }`}
          aria-label="Submit business partnership inquiry"
        >
          {isLoading ? "Submitting..." : "Submit Your Inquiry"}
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
