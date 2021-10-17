import React from "react";

const Input = (props) => {
  const { label, name, type, register, helpText, error, placeholder } = props;
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
          placeholder={placeholder}
          className={`form-control border-primary custom-input ${
            error ? "border-danger" : ""
          }`}
          name={name}
          {...register}
          style={{ outline: "none", boxShadow: "none" }}
        />
        {error && <div className="text-danger">{error.message}</div>}
        {helpText && <div className="form-text">{helpText}</div>}
      </div>
    </>
  );
};

export default Input;
