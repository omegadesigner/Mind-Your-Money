import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./drop";
import "./Options.css";

function Options() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="this">
      <nav className="options">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Options <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Options;
