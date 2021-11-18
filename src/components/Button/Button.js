import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
  customClass,
  routerLink,
  isExternal,
  linkUrl,
  icon,
  title,
  action,
}) => {
  if (routerLink) {
    if (isExternal) {
      return (
        <a
          href={linkUrl}
          target="_blank"
          className={[customClass, "button"].join(" ")}
          rel="noreferrer"
        >
          {icon}
          {title}
        </a>
      );
    } else {
      return (
        <Link to={linkUrl} className={[customClass, "button"].join(" ")}>
          {icon}
          {title}
        </Link>
      );
    }
  } else {
    return (
      <button className={[customClass, "button"].join(" ")} onclick={action}>
        {icon}
        {title}
      </button>
    );
  }
};

Button.defaultProps = {
  customClass: "",
};

export default Button;
