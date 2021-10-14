import React from "react";

const Input = (props) => {
  const { label, name, type, register, helpText } = props;
  return (
    <>
      <div className="mb-3">
        {label && (
          <label htmlFor={name} className="form-label text-secondary ">
            {label}
          </label>
        )}
        <input
          type={type}
          className="form-control border-primary custom-input"
          name={name}
          {...register}
        />
        {helpText && <div className="form-text">{helpText}</div>}
      </div>
    </>
  );
};

export default Input;
