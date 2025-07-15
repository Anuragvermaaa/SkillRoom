import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHeadset,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className="space-y-6 mb-1">
      <h2 className="text-2xl font-bold text-white mb-4">
        Head Office - Noida
      </h2>

      {/* Contact Number */}
      <div className="flex items-start gap-4">
        <FontAwesomeIcon
          icon={faPhone}
          className="text-blue-400 w-6 h-6 mt-1"
        />
        <div>
          <p className="text-gray-400 font-semibold">Contact</p>
          <a
            href="tel:+916207101039"
            className="text-gray-200 hover:text-blue-400 transition-colors"
          >
            +91-6207101039
          </a>
          <p className="text-sm text-gray-500 mt-1">
            Call us during business hours (Mon-Sat, 9 AM - 7 PM) for any general
            queries or technical support.
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-blue-400 w-6 h-6 mt-1"
        />
        <div>
          <p className="text-gray-400 font-semibold">Email</p>
          <a
            href="mailto:contact.skillroom@gmail.com"
            className="text-gray-200 hover:text-blue-400 transition-colors"
          >
            contact.skillroom@gmail.com
          </a>
          <p className="text-sm text-gray-500 mt-1">
            For partnership inquiries, feedback, or support, drop us an email
            and we’ll get back within 24 hours.
          </p>
        </div>
      </div>

      {/* Helpline */}
      <div className="flex items-start gap-4">
        <FontAwesomeIcon
          icon={faHeadset}
          className="text-blue-400 w-6 h-6 mt-1"
        />
        <div>
          <p className="text-gray-400 font-semibold">Helpline</p>
          <a
            href="tel:+919220578090"
            className="text-gray-200 hover:text-blue-400 transition-colors"
          >
            +91-9220578090
          </a>
          <p className="text-sm text-gray-500 mt-1">
            Reach out to our dedicated helpline for urgent assistance or student
            counseling support.
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-4">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-blue-400 w-6 h-6 mt-1"
        />
        <div>
          <p className="text-gray-400 font-semibold">Address</p>
          <p className="text-gray-200">
            Plot No. 44, Sector 45, Noida, 201303, Uttar Pradesh, India
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Located in the heart of NCR’s educational hub, our office is easily
            accessible via public transport and major roads.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
