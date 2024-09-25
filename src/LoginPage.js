import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Admin_home_page from "./Admin_home_page";

export default function LoginPage() {
  const [dentials, setdentials] = useState({
    UserID: "",
    Password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={dentials.username}
            required
          />

          <br />
          <label>Password:</label>
          <input
            className="input_box"
            type="password"
            name="password"
            value={dentials.password}
            required
          />

          <br />
          <div style={{ marginLeft: "100PX", marginTop: "30PX" }}>
            <table>
              <tr>
                <td>
                  <button
                    id="button"
                    onClick={() => setdentials({ UserID: "", Password: "" })}
                  >
                    cancel
                  </button>
                </td>
                <td>
                  {" "}
                  <button id="button" onClick={() => {}} type="submit">
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
