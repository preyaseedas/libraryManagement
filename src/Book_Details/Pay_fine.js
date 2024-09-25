import React from "react";

export default function Pay_fine() {
  return (
    <div>
      <h1>Pay Fine</h1>
      <label> Enter Book Name</label>
      <input type="text"></input>

      <label>Enter Auther</label>
      <input type="text"></input>
      <label>Serial No</label>
      <input type="text"></input>
      <label>Issue Date</label>
      <span>
        <select title="Month">
          <option value="0" selected="1">
            Month
          </option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
        </select>
        <select title="Day">
          <option value="0" selected="1">
            Day
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select title="Year" class="selectbody fl">
          <option value="0" selected="1">
            Year
          </option>
          <option value="2015">2024</option>
          <option value="2014">2023</option>
          <option value="2013">2022</option>
        </select>
      </span>
      <label>Return Date</label>
      <span>
        <select title="Month" class="selectbody">
          <option value="0" selected="1">
            Month
          </option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
        </select>
        <select title="Day" class="selectbody fl">
          <option value="0" selected="1">
            Day
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select title="Year" class="selectbody fl">
          <option value="0" selected="1">
            Year
          </option>
          <option value="2015">2024</option>
          <option value="2014">2023</option>
          <option value="2013">2022</option>
        </select>
      </span>
      <label> Actual Return Date</label>
      <span>
        <select title="Month" class="selectbody">
          <option value="0" selected="1">
            Month
          </option>
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
        </select>
        <select title="Day" class="selectbody fl">
          <option value="0" selected="1">
            Day
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <select title="Year" class="selectbody fl">
          <option value="0" selected="1">
            Year
          </option>
          <option value="2015">2024</option>
          <option value="2014">2023</option>
          <option value="2013">2022</option>
        </select>
      </span>
      <label>Fine Calculated</label>
      <label type="text">Remarks </label>
      <label></label>
      <textarea />
      <input type="checkbox">Fain Paid</input>
      <div>
        <button>cancel</button>
        <button>confirm</button>
        <button>Log Out</button>
      </div>
    </div>
  );
}
