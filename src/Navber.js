import React from "react";

export default function Navber() {
  return (
    <div className="d-flex justify-content-center" style={style.nav}>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/"
              style={{ color: "Black" }}
            >
              Maintenance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Reports" style={{ color: "Black" }}>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/Transaction"
              style={{ color: "Black" }}
            >
              Transaction
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
const style = {
  nav: {
    height: "38px",
    width: "1170px",
    marginTop: "50px",
    marginLeft: "135px",
    color: "Black",
    fontSize: "20px",
    backgroundColor: "orange",
    // backgroundColor: "red",
  },
};
