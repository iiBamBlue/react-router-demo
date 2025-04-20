import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  // customClassName is a function that accepts an object as a parameter.
  // This object has an isActive property that is true if the link is active.
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      {/* Now, if the link is active, the menu__link_active class will be added
            to the class list. */}
      <NavLink to="/" className={customClassName}>
        Home
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Emoji Reviews
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        About Me
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        About Us
      </NavLink>
    </nav>
  );
}

export default NavBar;
