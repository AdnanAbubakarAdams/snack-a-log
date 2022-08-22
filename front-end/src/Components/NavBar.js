import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <h1>
            <Link to="/">SNACKS</Link>
        </h1> */}
      <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
      <h1>
        <button>
          <Link to="/snacks/new">New Snack</Link>
        </button>
      </h1>
    </nav>
  );
};

export default NavBar;