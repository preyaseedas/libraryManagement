import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    UserID: "",
    Password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.UserID === "admin" && credentials.Password === "password") {
      navigate("/Admin_home");
    } else {
      alert("Invalid, redplease try again!");
    }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="login">
        <h2>Library Management System</h2>
        <form onSubmit={handleSubmit}>
          <label>User ID:</label>

          <input
            className="input_box"
            type="text"
            name="UserID"
            value={credentials.UserID}
            onChange={handleChange}
            required
          />

          <br />
          <label>Password:</label>
          <input
            className="input_box"
            type="password"
            name="password"
            value={credentials.Password}
            onChange={handleChange}
            required
          />

          <br />
          <div style={{ marginLeft: "100PX", marginTop: "30PX" }}>
            <table>
              <tr>
                <td>
                  <button
                    id="login_button"
                    onClick={() => setCredentials({ UserID: "", Password: "" })}
                  >
                    cancel
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    id="login_button"
                    type="submit"
                    onClick={() => setCredentials({ UserID: "", Password: "" })}
                  >
                    Login
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
