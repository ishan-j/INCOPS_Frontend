import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => window.location.href = "/", 2000);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #556B2F 0%, #1a1a1a 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        borderBottom: "2px solid rgba(85, 107, 47, 0.5)"
      }}>
        <h1 style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: "bold",
          color: "#8FBC8F",
          letterSpacing: "2px"
        }}>INCOPs</h1>
        
        <div style={{ display: "flex", gap: "30px" }}>
          <button onClick={() => window.location.href = "/"} style={{
            background: "transparent",
            border: "2px solid #556B2F",
            color: "#556B2F",
            padding: "10px 25px",
            borderRadius: "0",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#556B2F";
            e.target.style.color = "#8FBC8F";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#556B2F";
          }}>
            Login
          </button>
          
          <button onClick={() => window.location.reload()} style={{
            background: "transparent",
            border: "2px solid #8FBC8F",
            color: "#8FBC8F",
            padding: "10px 25px",
            borderRadius: "0",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "1px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#8FBC8F";
            e.target.style.color = "#1a1a1a";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#8FBC8F";
          }}>
            Register
          </button>
        </div>
      </div>

      {/* Register Form Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "80px 50px",
        minHeight: "calc(100vh - 100px)"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "500px"
        }}>
          <h2 style={{
            color: "#8FBC8F",
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "300",
            letterSpacing: "1px"
          }}>Create Account</h2>
          
          <p style={{
            color: "#b8b8b8",
            fontSize: "14px",
            marginBottom: "50px",
            letterSpacing: "0.5px"
          }}>Join us to get started</p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#8FBC8F",
                fontSize: "12px",
                marginBottom: "8px",
                fontWeight: "600",
                letterSpacing: "1px"
              }}>USERNAME</label>
              <input
                name="username"
                placeholder="your_username"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #556B2F",
                  background: "rgba(30, 30, 30, 0.7)",
                  color: "#fff",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  borderRadius: "0",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#8FBC8F"}
                onBlur={(e) => e.target.style.borderColor = "#556B2F"}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#8FBC8F",
                fontSize: "12px",
                marginBottom: "8px",
                fontWeight: "600",
                letterSpacing: "1px"
              }}>EMAIL ADDRESS</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #556B2F",
                  background: "rgba(30, 30, 30, 0.7)",
                  color: "#fff",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  borderRadius: "0",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#8FBC8F"}
                onBlur={(e) => e.target.style.borderColor = "#556B2F"}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#8FBC8F",
                fontSize: "12px",
                marginBottom: "8px",
                fontWeight: "600",
                letterSpacing: "1px"
              }}>PASSWORD</label>
              <div style={{ position: "relative" }}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 15px",
                    border: "1px solid #556B2F",
                    background: "rgba(30, 30, 30, 0.7)",
                    color: "#fff",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    borderRadius: "0",
                    transition: "border-color 0.3s ease"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#8FBC8F"}
                  onBlur={(e) => e.target.style.borderColor = "#556B2F"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#8FBC8F",
                    cursor: "pointer",
                    fontSize: "14px"
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <label style={{
                display: "block",
                color: "#8FBC8F",
                fontSize: "12px",
                marginBottom: "8px",
                fontWeight: "600",
                letterSpacing: "1px"
              }}>CONFIRM PASSWORD</label>
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  border: "1px solid #556B2F",
                  background: "rgba(30, 30, 30, 0.7)",
                  color: "#fff",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  borderRadius: "0",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "#8FBC8F"}
                onBlur={(e) => e.target.style.borderColor = "#556B2F"}
              />
            </div>

            <button type="submit" style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #8FBC8F 0%, #556B2F 100%)",
              color: "#1a1a1a",
              border: "none",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 15px rgba(85, 107, 47, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(85, 107, 47, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(85, 107, 47, 0.3)";
            }}>
              Create Account
            </button>
          </form>

          {message && (
            <p style={{
              marginTop: "20px",
              color: message.includes("successful") ? "#8FBC8F" : "#ff6b6b",
              textAlign: "center",
              fontSize: "13px"
            }}>
              {message}
            </p>
          )}

          <p style={{
            marginTop: "30px",
            color: "#999",
            fontSize: "13px",
            textAlign: "center"
          }}>
            Already have an account? <a href="/" style={{
              color: "#8FBC8F",
              textDecoration: "none",
              fontWeight: "600"
            }}>Sign in here</a>
          </p>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(85, 107, 47, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}></div>
      </div>
    </div>
  );
}

export default Register;
