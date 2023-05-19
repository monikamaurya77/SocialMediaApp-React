import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const handleChange = () => {
    setIsDark(!isDark);
  };
  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="logo" width="35px" height="35px" />
        <a className="link" href="/">
          MonikaConnect
        </a>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input darkBtn"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onChange={handleChange}
          title={"dark Mode"}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {isDark ? "Disable" : "Enable"}
        </label>
      </div>
    </div>
  );
};

export default Navbar;
