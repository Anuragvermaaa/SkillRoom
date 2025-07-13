
import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = ({ showToast }) => {
  return (
    <section className="py-22 bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
          style={{
            background: "linear-gradient(to right, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactInfo />
          <ContactForm showToast={showToast} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

