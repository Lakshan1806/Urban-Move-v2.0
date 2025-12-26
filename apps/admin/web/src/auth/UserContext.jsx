import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function validateSession() {
      try {
        const response = await axios.get("/admin/profile");
        const data = response.data;
        localStorage.setItem("adminData", JSON.stringify(data));
        setAdmin(data);
      } catch (error) {
        console.error("Session validation failed:", error);
        localStorage.removeItem("adminData");
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    }
    validateSession();
  }, []);
  
  return (
    <UserContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </UserContext.Provider>
  );
}
