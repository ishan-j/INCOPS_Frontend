import React, { useState, useEffect } from "react";

function Homepage({ onLogout }) {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    onLogout();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #556B2F 0%, #1a1a1a 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        borderBottom: "2px solid rgba(85, 107, 47, 0.5)",
        background: "rgba(0, 0, 0, 0.3)"
      }}>
        <h1 style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: "bold",
          color: "#8FBC8F",
          letterSpacing: "2px"
        }}>INCOPs</h1>
        
        <div style={{ position: "relative" }}>
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              background: "transparent",
              border: "2px solid #8FBC8F",
              color: "#8FBC8F",
              padding: "10px 25px",
              borderRadius: "0",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#8FBC8F";
              e.target.style.color = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#8FBC8F";
            }}>
            {user?.username || "User"} ▼
          </button>

          {dropdownOpen && (
            <div style={{
              position: "absolute",
              top: "45px",
              right: 0,
              background: "rgba(30, 30, 30, 0.95)",
              border: "1px solid #556B2F",
              borderRadius: "0",
              minWidth: "200px",
              zIndex: 1000,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            }}>
              <div style={{
                padding: "15px 20px",
                borderBottom: "1px solid #556B2F",
                color: "#8FBC8F",
                fontSize: "12px"
              }}>
                {user?.email}
              </div>
              <button 
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "12px 20px",
                  background: "transparent",
                  border: "none",
                  color: "#ff6b6b",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(85, 107, 47, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: "60px 50px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        {/* Welcome Section */}
        <div style={{
          marginBottom: "80px"
        }}>
          <h2 style={{
            color: "#8FBC8F",
            fontSize: "48px",
            marginBottom: "20px",
            fontWeight: "300",
            letterSpacing: "2px"
          }}>Welcome, {user?.username}</h2>
          
          <p style={{
            color: "#b8b8b8",
            fontSize: "16px",
            lineHeight: "1.6",
            maxWidth: "800px"
          }}>
            You have successfully logged into your INCOPs account. Explore our platform to manage your operations efficiently.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginBottom: "60px"
        }}>
          {/* Card 1 */}
          <div style={{
            background: "rgba(85, 107, 47, 0.2)",
            border: "1px solid rgba(143, 188, 143, 0.3)",
            padding: "40px",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.4)";
            e.currentTarget.style.borderColor = "#8FBC8F";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.2)";
            e.currentTarget.style.borderColor = "rgba(143, 188, 143, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h3 style={{
              color: "#8FBC8F",
              fontSize: "20px",
              marginTop: 0,
              marginBottom: "15px",
              letterSpacing: "1px"
            }}>Dashboard</h3>
            <p style={{
              color: "#999",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: 0
            }}>
              View your operational metrics and performance analytics in real-time.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: "rgba(85, 107, 47, 0.2)",
            border: "1px solid rgba(143, 188, 143, 0.3)",
            padding: "40px",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.4)";
            e.currentTarget.style.borderColor = "#8FBC8F";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.2)";
            e.currentTarget.style.borderColor = "rgba(143, 188, 143, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h3 style={{
              color: "#8FBC8F",
              fontSize: "20px",
              marginTop: 0,
              marginBottom: "15px",
              letterSpacing: "1px"
            }}>Operations</h3>
            <p style={{
              color: "#999",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: 0
            }}>
              Manage and optimize your operational workflows with advanced tools.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: "rgba(85, 107, 47, 0.2)",
            border: "1px solid rgba(143, 188, 143, 0.3)",
            padding: "40px",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.4)";
            e.currentTarget.style.borderColor = "#8FBC8F";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(85, 107, 47, 0.2)";
            e.currentTarget.style.borderColor = "rgba(143, 188, 143, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            <h3 style={{
              color: "#8FBC8F",
              fontSize: "20px",
              marginTop: 0,
              marginBottom: "15px",
              letterSpacing: "1px"
            }}>Reports</h3>
            <p style={{
              color: "#999",
              fontSize: "13px",
              lineHeight: "1.6",
              margin: 0
            }}>
              Generate comprehensive reports and analyze your business intelligence.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "60px"
        }}>
          {[
            { label: "Active Users", value: "1,234" },
            { label: "Total Operations", value: "5,678" },
            { label: "Success Rate", value: "98.2%" },
            { label: "Avg Response", value: "245ms" }
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: "linear-gradient(135deg, rgba(85, 107, 47, 0.3) 0%, rgba(85, 107, 47, 0.1) 100%)",
              border: "1px solid rgba(143, 188, 143, 0.2)",
              padding: "25px",
              textAlign: "center"
            }}>
              <div style={{
                color: "#8FBC8F",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                letterSpacing: "1px"
              }}>{stat.value}</div>
              <div style={{
                color: "#999",
                fontSize: "12px",
                letterSpacing: "0.5px"
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Activity Section */}
        <div style={{
          background: "rgba(85, 107, 47, 0.15)",
          border: "1px solid rgba(143, 188, 143, 0.2)",
          padding: "40px"
        }}>
          <h3 style={{
            color: "#8FBC8F",
            fontSize: "20px",
            marginTop: 0,
            marginBottom: "25px",
            letterSpacing: "1px"
          }}>Recent Activity</h3>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}>
            {[
              { action: "System Login", time: "2 hours ago" },
              { action: "Dashboard Accessed", time: "1 hour ago" },
              { action: "Report Generated", time: "45 minutes ago" },
              { action: "Settings Updated", time: "30 minutes ago" }
            ].map((activity, idx) => (
              <div key={idx} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: idx < 3 ? "1px solid rgba(85, 107, 47, 0.3)" : "none"
              }}>
                <span style={{ color: "#b8b8b8", fontSize: "13px" }}>
                  {activity.action}
                </span>
                <span style={{ color: "#999", fontSize: "12px" }}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(85, 107, 47, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }}></div>
      
      <div style={{
        position: "fixed",
        top: "200px",
        left: "50px",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(143, 188, 143, 0.05) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }}></div>
    </div>
  );
}

export default Homepage;
