import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout";
import Book_issue from "./Book_Details/Book_issue";
import Book_search from "./Book_Details/Book_search";
import LoginPage from "./LoginPage";
import Book_return from "./Book_Details/Book_return";
import Book_available from "./Book_Details/Book_available";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
