import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "../Style/UserList.css";
import axios from "axios";
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }, []);
  
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="user-list-container">
        <h2 className="heading animate__animated animate__fadeInDown">User Directory</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          className="search-input"
          onChange={e => setSearch(e.target.value)}
        />
  
        {loading && <p className="info">Loading users...</p>}
        {error && <p className="error">Failed to load user data. Try again later.</p>}
  
        <div className="cards-grid">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };
  
  export default UserList;
