import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Layout from "./Layout";
import Admin_home_page from "./Admin_home_page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/admin_home" element={<Admin_home_page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
