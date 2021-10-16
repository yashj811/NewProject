import React from "react";

const Button = (props) => {
  const { type, text } = props;
  return (
    <button type={type} className="btn btn-primary w-100 my-2 rounded">
      {text}
    </button>
  );
};

export default Button;
