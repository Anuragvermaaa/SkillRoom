

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      axios
        .get("http://localhost:5000/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const data = response.data.user;
          setUser({
            _id: data._id,
            fullname: data.fullname,
            email: data.email,
            contact: data.contact,
            type: data.type,
          });
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("userToken");
          setIsAuthenticated(false);
          setUser(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const response = await axios.post("http://localhost:5000/users/login", credentials);
    const { token, user: userData, message } = response.data;
    localStorage.setItem("userToken", token);
    setUser({
      _id: userData._id,
      fullname: userData.fullname,
      email: userData.email,
      contact: userData.contact,
      type: userData.type,
    });
    setIsAuthenticated(true);
    return message;
  };

  const signup = async (credentials) => {
    const response = await axios.post("http://localhost:5000/users/register", credentials);
    const { token, user: userData, message } = response.data;
    localStorage.setItem("userToken", token);
    setUser({
      _id: userData._id,
      fullname: userData.fullname,
      email: userData.email,
      contact: userData.contact,
      type: userData.type,
    });
    setIsAuthenticated(true);
    return message;
  };

  const logout = async () => {
    const token = localStorage.getItem("userToken");
    try {
      if (token) {
        await axios.get("http://localhost:5000/users/logout", {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("userToken");
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <UserAuthContext.Provider value={{ user, isAuthenticated, isLoading, login, signup, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;


