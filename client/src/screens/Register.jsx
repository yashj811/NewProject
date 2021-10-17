import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { RegisterUser } from "../features/actions/UserActions";
import ErrorModal from "../components/ErrorModal";
import { useHistory } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (error) {
      setShow(true);
    }
  }, [error]);

  const onSubmit = async (data) => {
    await dispatch(RegisterUser(data));
    if (!error) {
      history.push("/crypto");
    }
  };
  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center p-2 m-2"
        style={{ height: "90vh" }}
      >
        <div className="card p-4 col-lg-4 col-md-6 col-sm-10 col-xs-10 border">
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <ErrorModal
                size="sm"
                show={show}
                handleShow={() => setShow(true)}
                error={error}
                handleClose={() => setShow(false)}
              />
            )}
            <Input
              name="email"
              type="email"
              label="Email address"
              error={errors.email}
              register={register("email", {
                required: "Email is required.",
                maxLength: {
                  value: 30,
                  message: "Max length can be 30.",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            <Input
              name="passowrd"
              type="password"
              label="Passowrd"
              error={errors.password}
              register={register("password", {
                required: "Password is required.",
                maxLength: {
                  value: 14,
                  message: "Max length can be 14.",
                },
              })}
            />
            <Button type="submit" text="Register" loading={loading} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
