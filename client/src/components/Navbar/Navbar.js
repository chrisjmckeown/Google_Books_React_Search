import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

function Navbar() {
  return (
    <header className='header'>
      <div className='banner'>
        <div className='name'>
          <h1>Google Book Search</h1>
        </div>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link
              to='/Search'
              className={window.location.pathname === "/search" ? "active" : ""}
              onClick={() => {
                window.location.href = "/search";
              }}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to='/Saved'
              className={window.location.pathname === "/saved" ? "active" : ""}
              onClick={() => {
                window.location.href = "/saved";
              }}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
