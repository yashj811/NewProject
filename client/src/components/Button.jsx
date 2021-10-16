import React from "react";
import { Button as BSButton } from "react-bootstrap";

const Button = (props) => {
  const { type, text, loading, disabled } = props;
  return (
    <BSButton
      type={type}
      disabled={disabled ? disabled : false}
      className="btn btn-primary w-100 my-2 rounded"
    >
      {!loading ? "Loading..." : text}
    </BSButton>
  );
};

export default Button;
