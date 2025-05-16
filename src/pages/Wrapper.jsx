import { useEffect, useState } from "react";
import supabase from "../helper/supabaseClient";
import { Navigate } from "react-router-dom";
import "../assets/css/loader.css";

function Wrapper({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner" />
      </div>
    );
  } else {
    if (authenticated) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
}

export default Wrapper;
