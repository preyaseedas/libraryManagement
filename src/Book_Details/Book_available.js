import React from "react";
import "./Book_details.css";

export default function Book_available() {
  return (
    <div className="book_available ">
      <h1> BOOK Availability</h1>
      <label>Enter Book Name</label>
      <input type="select" />
      <label>Enter Author</label>
      <input type="select" />
      <div>
        <button id="button">back</button>
        <button id="button" onClick={() => {}}>
          Search
        </button>
        <button>Log Out</button>{" "}
      </div>
    </div>
  );
}
