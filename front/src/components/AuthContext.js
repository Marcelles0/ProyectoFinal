import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if(token){
      if((token===undefined)||(token===null)){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      else{
        localStorage.setItem("token", localStorage.getItem("token"));
      }
    }else{
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    
  }, [token]);
  
  if (!token) return <Navigate to="/login" replace />;

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};