import React from "react";

export default function Book_issue() {
  return (
    <div className="bookreturn ">
      <h1>Book Issue</h1>
      <label> Enter Book Name</label>
      <select title="Day">
        <option value="0" selected="1">
          1
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <label>Enter Auther</label>
      <input></input>
      <label> </label>
      <textarea />

      <label>Issue Date</label>
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
      <div>
        <button id="button">cancel</button>
        <button id="button">confirm</button>
        <button>Log Out</button>
      </div>
    </div>
  );
}
