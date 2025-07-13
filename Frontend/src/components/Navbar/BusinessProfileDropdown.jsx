import React, { useState } from "react";

const BusinessProfilePage = ({ user, handleSignout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user.fullname.firstname,
    lastname: user.fullname.lastname,
    email: user.email,
    contact: user.contact,
    organization: user.organization || "Your Organization",
    query: user.query || "Your business query",
    website: user.website || "",
    address: user.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Implement save logic here (e.g., API call to update business profile)
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-8 border border-gray-700">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold text-white">
              {user.organization ? user.organization[0] : "B"}
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">
              {user.organization}
            </h1>
            <p className="text-gray-400 mt-1">
              {user.fullname.firstname} {user.fullname.lastname}
            </p>
            <p className="text-gray-400">
              Type:{" "}
              <span className="capitalize text-blue-400 font-medium">
                {user.type}
              </span>
            </p>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Business Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Phone</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">Contact Person:</span>{" "}
                  {formData.firstname} {formData.lastname}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {formData.contact}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {formData.address || "Not provided"}
                </p>
              </div>
            )}
          </div>

          {/* Business Information */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Business Information
            </h2>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">
                    Business Query
                  </label>
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">
                    Business Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">Organization:</span>{" "}
                  {formData.organization}
                </p>
                <p>
                  <span className="font-medium">Website:</span>{" "}
                  {formData.website ? (
                    <a
                      href={formData.website}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {formData.website}
                    </a>
                  ) : (
                    "Not provided"
                  )}
                </p>
                <p>
                  <span className="font-medium">Query:</span> {formData.query}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Save and Sign Out Buttons */}
        {isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        )}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfilePage;
