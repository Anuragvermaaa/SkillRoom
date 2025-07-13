// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export const googleAuth = async (type) => {
//   try {
//     const endpoint = type === "user" ? "/users/google" : "/business/google";
//     console.log(`[googleApi] Initiating Google auth for ${type}: ${API_URL}${endpoint}`);
//     const response = await axios.get(`${API_URL}${endpoint}`, {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//     });
//     return response;
//   } catch (error) {
//     console.error(`[googleApi] Error in ${type} Google auth:`, {
//       status: error.response?.status,
//       data: error.response?.data,
//       message: error.message,
//     });
//     throw {
//       status: error.response?.status,
//       message: error.response?.data?.message || "Google authentication failed",
//     };
//   }
// };