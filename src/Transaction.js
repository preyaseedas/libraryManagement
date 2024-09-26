import React from "react";
import { NavLink } from "react-router-dom";
import Navber from "./Navber";
import "./Transaction.css";
import { useState } from "react";
import Book_available from "./Book_Details/Book_available";
import "./Book_Details/Book_details.css";

export default function Transaction() {
  const [bookAvi, setBookAvi] = useState("");

  return (
    <div>
      <center>
        <Navber />

        <div className=" transaction">
          <div className="book">
            <p
              onClick={() => {
                setBookAvi(<Book_available />);
              }}
            >
              Is book avaible?{" "}
            </p>{" "}
            <p>Issue Book?</p>
            <p> Return book? </p>
            <p>Pay Fine?</p>
          </div>
          {bookAvi && <div className="book_available">{bookAvi}</div>}

          <button id="button" style={{ marginTop: "300px" }}>
            Log Out{" "}
          </button>
        </div>
      </center>
    </div>
  );
}
