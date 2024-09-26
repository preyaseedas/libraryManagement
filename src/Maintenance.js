import React from "react";
import Navber from "./Navber";
import "./Maintenanace.css";
export default function Maintenance() {
  return (
    <div>
      <Navber />
      <center>
        <div>
          <h1 style={{ marginTop: "50px" }}> Product dentials</h1>
          <table className="custom-table ">
            <tr>
              <th>CODE NO FROM</th>
              <th>CODE NO TO</th>
              <th>CATEGORY</th>
            </tr>

            <tr>
              <td>SC(B/M)000001</td>
              <td>SC(B/M)000004</td>
              <td>SCIENCE</td>
            </tr>
            <tr>
              <td>EC(B/M)000001</td>
              <td>EC(B/M)000004</td>
              <td>ECONOMICS</td>
            </tr>
            <tr>
              <td>FC(B/M)000001</td>
              <td>FC(B/M)000004</td>
              <td>FICTION</td>
            </tr>
            <tr>
              <td>CH(B/M)000001</td>
              <td>CH(B/M)000004</td>
              <td>CHILDREN</td>
            </tr>
          </table>
          <br />
          <button id="button">LOG OUT</button>
        </div>
      </center>
    </div>
  );
}
