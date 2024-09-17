import React from "react";
import Navber from "./Navber";

export default function Maintenance() {
  return (
    <div>
      <Navber />
      <div style={{ display: "block", alignItems: "center" }}>
        <h1> Product dentials</h1>
        <table
          style={{
            marginLeft: "37%",
            height: "400px",
            width: "400px",
            border: "1px solid black",
          }}
        >
          <tr>
            <td>CODE NO FROM</td>
            <td>CODE NO TO</td>
            <td>CATEGORY</td>
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
    </div>
  );
}
