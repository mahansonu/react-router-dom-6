import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const AuthContext = React.createContext({});

const AuthContextProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const setToken = (token) => {
    setToken_(token);
  };
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", "hello sonu");
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
