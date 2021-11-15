import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Button.scss";

const Button = ({ customClass, routerLink, linkUrl, icon, title, action }) => {
  const location = useLocation();

  if (routerLink) {
    return (
      <Link to={linkUrl}>
        <button
          className={[
            customClass,
            location.pathname === linkUrl ? "active" : "",
          ].join(" ")}
        >
          {icon}
          {title}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={customClass} onclick={action}>
        {icon}
        {title}
      </button>
    );
  }
};

export default Button;
