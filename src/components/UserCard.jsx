import React, { useState } from "react";
import "../Style/UserCard.css";

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
      <p>{user.email}</p>
      {showDetails && (
        <div className="extra-info">
          <p ><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
      <button className="toggle-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default UserCard;
