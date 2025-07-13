

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitPartnership = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/partnership`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Submission failed");
  }
};

export const submitCallback = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/callback`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Submission failed");
  }
};

export const submitBusinessPartnership = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/businessPartnership`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Submission failed");
  }
};

export const submitCvSubmission = async (data) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("cv", data.cv);

    const response = await axios.post(`${API_URL}/cvSubmission`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Submission failed");
  }
};