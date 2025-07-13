import React, { useState } from "react";

const UserProfilePage = ({ user, handleSignout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user.fullname.firstname,
    lastname: user.fullname.lastname,
    email: user.email,
    contact: user.contact,
    bio: user.bio || "Tell us about yourself!",
    address: user.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Implement save logic here (e.g., API call to update user data)
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-4xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl p-8 border border-gray-700">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-bold text-white">
              {user.fullname.firstname[0]}
              {user.fullname.lastname[0]}
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
              {user.fullname.firstname} {user.fullname.lastname}
            </h1>
            <p className="text-gray-400 mt-1">{user.email}</p>
            <p className="text-gray-400">
              Type:{" "}
              <span className="capitalize text-indigo-400 font-medium">
                {user.type}
              </span>
            </p>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Profile Details */}
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
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Phone</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">Phone:</span> {formData.contact}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {formData.address || "Not provided"}
                </p>
              </div>
            )}
          </div>

          {/* Bio Section */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
            {isEditing ? (
              <div>
                <label className="block text-sm text-gray-400">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                />
                <label className="block text-sm text-gray-400 mt-4">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 bg-gray-700 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p>{formData.bio}</p>
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

export default UserProfilePage;
