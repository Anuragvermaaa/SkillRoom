// import React from "react";

// const CvDropSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-16 bg-white text-center max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
//         Not Finding a Relevant Job?
//       </h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
//         We’re always eager to connect with passionate innovators. Even if you
//         don’t see the perfect role right now, drop your CV and tell us how you
//         can drive our mission forward at SkillRoom.
//       </p>
//       <form className="max-w-xl mx-auto space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="file"
//             accept=".pdf,.doc,.docx"
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="inline-block w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
//         >
//           Submit CV
//         </button>
//       </form>
//     </section>
//   );
// };

// export default CvDropSection;

import React from "react";
import useForm from "../../utils/useForm";
import { submitCvSubmission } from "../../utils/api";

const CvDropSection = ({ showToast }) => {
  const initialValues = { name: "", email: "", cv: null };
  const { formData, errors, isLoading, handleInputChange, handleSubmit } = useForm(
    initialValues,
    submitCvSubmission,
    showToast
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      showToast("File size exceeds 5MB limit", "error");
      return;
    }
    handleInputChange({ target: { name: "cv", value: file } });
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2">
        Not Finding a Relevant Job?
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        We’re always eager to connect with passionate innovators. Even if you
        don’t see the perfect role right now, drop your CV and tell us how you
        can drive our mission forward at SkillRoom.
      </p>
      <form className="max-w-xl mx-auto space-y-4">
        {errors.server && (
          <p className="text-red-500 text-sm bg-red-100/50 p-3 rounded-md">
            {errors.server}
          </p>
        )}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className={`w-full p-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            aria-label="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            aria-label="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className={`w-full p-3 border ${
              errors.cv ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            aria-label="Upload CV"
          />
          {errors.cv && (
            <p className="text-red-500 text-sm mt-2">{errors.cv}</p>
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Submit CV"
        >
          {isLoading ? "Submitting..." : "Submit CV"}
        </button>
      </form>
    </section>
  );
};

export default CvDropSection;
