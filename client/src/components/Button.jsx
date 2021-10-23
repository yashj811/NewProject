import React from "react";
import { Button as BSButton } from "react-bootstrap";

const Button = (props) => {
  const { type, text, loading, disabled, classes } = props;
  return (
    <BSButton
      type={type}
      disabled={disabled ? disabled : false}
      className={`btn btn-primary my-2 rounded ${classes}`}
    >
      {loading ? "Loading..." : text}
    </BSButton>
  );
};

export default Button;
