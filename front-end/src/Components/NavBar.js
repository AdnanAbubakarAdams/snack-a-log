import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* <h1>
            <Link to="/">SNACKS</Link>
        </h1> */}
      <h1>
        <Link to="/snacks">SNACKS</Link>
      </h1>
      <h1>
        <button>
          <Link to="/snacks/new">NEW SNACK</Link>
        </button>
      </h1>
    </nav>
  );
};

export default NavBar;
