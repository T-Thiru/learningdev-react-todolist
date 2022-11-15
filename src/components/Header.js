import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>To Do List</h1>
    </div>
  );
};

export default Header;
