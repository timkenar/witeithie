import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    try {
      const response = await axios.post("/api/token/", {
        username,
        password,
      });

      // Assuming the response contains a token
      const { access, refresh } = response.data;

      // Save tokens to localStorage or cookies
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      // Redirect or update UI as needed
      console.log("Login successful!");
    } catch (err) {
      setError("Invalid username or password.");
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
