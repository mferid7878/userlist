import React, { useEffect, useState } from "react";
import "./User-data.css";

export function Userlist() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span style={{ fontWeight: "400px", fontSize: "24px" }}>
              {user.name}
            </span>
            <br />
            Username: {user.username} <br />
            Email: {user.email} <br />
            Phone: {user.phone} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
