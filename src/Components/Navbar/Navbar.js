import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-content d-flex">
        <div className="zepto-logo">
          <Link to="/">
            <img
              width={110}
              src="https://www.zeptonow.com/images/logo.svg"
              alt=""
            />
          </Link>
        </div>

        <div>SR Nagar</div>

        <div className="search-bar">
          <i
            style={{ color: "#A9A3AF" }}
            class="fa-solid fa-magnifying-glass"
          ></i>
          <input type="search" placeholder="Search for over 5000 products" />
        </div>
        <div className="Login">Login</div>
        <div className="btn btn-primary cart-btn">
          <i
            style={{ paddingRight: "1rem" }}
            class="fa-solid fa-bag-shopping"
          ></i>
          <span>My Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
