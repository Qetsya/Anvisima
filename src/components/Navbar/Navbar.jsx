import { NavLink } from "react-router-dom";

import navbarLinks from "./navbarLinks";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-content">
          {navbarLinks.map((navlink) => {
            return (
              <NavLink
                className={"navbar-link"}
                key={navlink.label}
                to={navlink.to}
              >
                {navlink.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
