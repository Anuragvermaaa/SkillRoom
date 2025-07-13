import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const submitForgotPassword = async ({ email, type }) => {
  try {
    const endpoint = type === "user" ? "/users/forgot-password" : "/business/forgot-password";
    console.log(`Sending POST to: ${endpoint} with email: ${email}`);
    const response = await axios.post(`${API_URL}${endpoint}`, { email }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(`Error in submitForgotPassword (${endpoint}):`, {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      config: error.config,
    });
    throw error;
  }
};

export const verifyOtp = async ({ otp, email, type }) => {
  try {
    const endpoint = type === "user" ? "/users/verify-otp" : "/business/verify-otp";
    console.log(`Sending POST to: ${endpoint} with email: ${email}, otp: ${otp}`);
    const response = await axios.post(`${API_URL}${endpoint}`, { otp, email }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(`Error in verifyOtp (${endpoint}):`, {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      config: error.config,
    });
    throw error;
  }
};

export const resetPassword = async ({ password, token, type }) => {
  try {
    const endpoint = type === "user" ? "/users/reset-password" : "/business/reset-password";
    console.log(`Sending POST to: ${endpoint} with token: ${token}`);
    const response = await axios.post(
      `${API_URL}${endpoint}`,
      { password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error(`Error in resetPassword (${endpoint}):`, {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      config: error.config,
    });
    throw error;
  }
};


