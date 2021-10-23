import React from "react";
import { Form } from "react-bootstrap";

const BlogInput = (props) => {
  const { label, name, type, register, error, placeholder, as, rows } = props;
  return (
    <>
      <Form.Group className="mb-3">
        {label && (
          <Form.Label htmlFor={name} className="form-label text-secondary ">
            {label}
          </Form.Label>
        )}
        <Form.Control
          type={type}
          as={as}
          rows={rows}
          placeholder={placeholder}
          className={`form-control border-primary custom-input pb-2 ${
            error ? "border-danger" : ""
          }`}
          name={name}
          {...register}
          style={{
            outline: "none",
            boxShadow: "none",
            // border: "0px",
          }}
        />
        {error && <div className="text-danger">{error.message}</div>}
      </Form.Group>
    </>
  );
};

export default BlogInput;
