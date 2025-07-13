// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const BusinessAuthContext = createContext();

// export const BusinessAuthProvider = ({ children }) => {
//   const [business, setBusiness] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("businessToken");
//     if (token) {
//       axios
//         .get("http://localhost:5000/business/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           const data = response.data.business;
//           setBusiness({
//             _id: data._id,
//             fullname: data.fullname,
//             email: data.email,
//             contact: data.contact,
//             organization: data.organization,
//             type: data.type,
//           });
//           setIsAuthenticated(true);
//         })
//         .catch(() => {
//           localStorage.removeItem("businessToken");
//           setIsAuthenticated(false);
//           setBusiness(null);
//         })
//         .finally(() => setIsLoading(false));
//     } else {
//       setIsLoading(false);
//     }
//   }, []);

//   const login = async (credentials) => {
//     const response = await axios.post("http://localhost:5000/business/login", credentials);
//     const { token, business: businessData, message } = response.data;
//     localStorage.setItem("businessToken", token);
//     setBusiness({
//       _id: businessData._id,
//       fullname: businessData.fullname,
//       email: businessData.email,
//       contact: businessData.contact,
//       organization: businessData.organization,
//       type: businessData.type,
//     });
//     setIsAuthenticated(true);
//     return message;
//   };

//   const signup = async (credentials) => {
//     const response = await axios.post("http://localhost:5000/business/register", credentials);
//     const { token, business: businessData, message } = response.data;
//     localStorage.setItem("businessToken", token);
//     setBusiness({
//       _id: businessData._id,
//       fullname: businessData.fullname,
//       email: businessData.email,
//       contact: businessData.contact,
//       organization: businessData.organization,
//       type: businessData.type,
//     });
//     setIsAuthenticated(true);
//     return message;
//   };

//   const logout = async () => {
//     const token = localStorage.getItem("businessToken");
//     try {
//       if (token) {
//         await axios.get("http://localhost:5000/business/logout", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//     } finally {
//       localStorage.removeItem("businessToken");
//       setBusiness(null);
//       setIsAuthenticated(false);
//     }
//   };

//   return (
//     <BusinessAuthContext.Provider value={{ business, isAuthenticated, isLoading, login, signup, logout }}>
//       {children}
//     </BusinessAuthContext.Provider>
//   );
// };

// export default BusinessAuthProvider;



import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BusinessAuthContext = createContext();

export const BusinessAuthProvider = ({ children }) => {
  const [business, setBusiness] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("businessToken");
    if (token) {
      axios
        .get("http://localhost:5000/business/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const data = response.data.client;
          setBusiness({
            _id: data._id,
            fullname: data.fullname,
            email: data.email,
            contact: data.contact,
            organization: data.organization,
            query: data.query,
            type: data.type,
          });
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("businessToken");
          setIsAuthenticated(false);
          setBusiness(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const response = await axios.post("http://localhost:5000/business/login", credentials);
    const { token, client: businessData, message } = response.data;
    localStorage.setItem("businessToken", token);
    setBusiness({
      _id: businessData._id,
      fullname: businessData.fullname,
      email: businessData.email,
      contact: businessData.contact,
      organization: businessData.organization,
      query: businessData.query,
      type: businessData.type,
    });
    setIsAuthenticated(true);
    return message || "Login successful";
  };

  const signup = async (credentials) => {
    const response = await axios.post("http://localhost:5000/business/register", credentials);
    const { token, client: businessData, message } = response.data;
    localStorage.setItem("businessToken", token);
    setBusiness({
      _id: businessData._id,
      fullname: businessData.fullname,
      email: businessData.email,
      contact: businessData.contact,
      organization: businessData.organization,
      query: businessData.query,
      type: businessData.type,
    });
    setIsAuthenticated(true);
    return message || "Signup successful";
  };

  const logout = async () => {
    const token = localStorage.getItem("businessToken");
    try {
      if (token) {
        await axios.get("http://localhost:5000/business/logout", {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("businessToken");
      setBusiness(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <BusinessAuthContext.Provider value={{ business, isAuthenticated, isLoading, login, signup, logout }}>
      {children}
    </BusinessAuthContext.Provider>
  );
};

export default BusinessAuthProvider;
