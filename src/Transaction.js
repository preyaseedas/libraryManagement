import React from "react";
import { NavLink } from "react-router-dom";
import Navber from "./Navber";
import "./Transaction.css";

export default function Transaction() {
  return (
    <div>
      <center>
        <Navber />

        <div className=" transaction">
          <div>
            <p onClick={() => {}}>Is book avaible? </p>
            <p>Issue Book?</p>
            <p> Return book? </p>
            <p>Pay Fine?</p>
          </div>
          <button>Log Out </button>
        </div>
      </center>
    </div>
  );
}
