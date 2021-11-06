import React from "react";
import { Link } from "react-router-dom";

function Nav({ links }) {
  return (
    <nav>
      {links.map(({ path, text }, index) => (
        <Link key={index} to={path}>
          {text}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
