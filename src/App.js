import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/registe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error connecting to server",err);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
