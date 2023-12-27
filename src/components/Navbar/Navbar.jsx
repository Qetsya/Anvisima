import { NavLink } from "react-router-dom";
import { slide as MobileMenu } from "react-burger-menu";

import navbarLinks from "./navbarLinks";
import { useMemo, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stateChangeHandler = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarPages = useMemo(
    () =>
      navbarLinks.map((navlink) => {
        return (
          <li key={navlink.label}>
            <NavLink
              className={"navbar-link"}
              to={navlink.to}
              onClick={closeMenu}
            >
              {navlink.label}
            </NavLink>
          </li>
        );
      }),
    [navbarLinks]
  );

  return (
    <nav className="navbar">
      <div className="wrapper">
        <MobileMenu
          isOpen={isOpen}
          onStateChange={(state) => stateChangeHandler(state)}
        >
          {navbarPages}
        </MobileMenu>
        <ul className="navbar-content">{navbarPages}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
