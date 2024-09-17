import React from "react";
import { NavLink } from "react-router-dom";
import Navber from "./Navber";

export default function Transaction() {
  return (
    <div>
      <Navber />
      Is book avaible?
      <br />
      Issue Book?
      <br />
      Return book?
      <br />
      Pay Fine?
    </div>
  );
}
