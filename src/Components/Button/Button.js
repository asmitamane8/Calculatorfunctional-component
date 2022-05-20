import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div
      className="Button"
      onClick={props.onClick}
      data-size={props.size}
      data-value={props.value}
    >
      {props.label}
    </div>
  );
}

export default Button;
