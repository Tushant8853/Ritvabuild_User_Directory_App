import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/GetStarted.css";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-container">
      <h1 className="get-started-title">Welcome to User Directory</h1>
      <button className="start-btn" onClick={() => navigate("/users")}>
        Get Started 🚀
      </button>
    </div>
  );
};

export default GetStarted;
