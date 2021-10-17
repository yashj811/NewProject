import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Layout from "../layouts/Layout";
import Button from "../components/Button";
import { GetBasicInfo } from "../features/actions/ResumeActions";
import ErrorModal from "../components/ErrorModal";

const PersonalDetails = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.resume);
  const history = useHistory();
  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    await dispatch(GetBasicInfo(data));
    if (!error) {
      history.push("/register");
    }
  };

  useEffect(() => {
    if (error) {
      setShow(true);
    }
  }, [error]);
  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "90vh" }}
      >
        {" "}
        <form
          className="border p-4 m-2  col-xl-4 col-lg-6 col-md-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {error && (
            <ErrorModal
              size="sm"
              show={show}
              handleShow={() => setShow(true)}
              error={error}
              handleClose={() => setShow(false)}
            />
          )}
          <div className="mb-3">
            <Input
              name="firstname"
              label="First Name"
              placeholder="First Name"
              type="text"
              error={errors.firstname}
              register={register("firstname", {
                required: "First name is required.",
                maxLength: {
                  value: 20,
                  message: "Max length can be 20.",
                },
              })}
            />
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="lastname"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              error={errors.lastname}
              register={register("lastname", {
                required: "Last name is required.",
                maxLength: {
                  value: 20,
                  message: "Max length can be 20.",
                },
              })}
            />
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="email"
              label="Email address"
              placeholder="Email address"
              type="text"
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
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="mobile"
              label="Mobile number"
              placeholder="Mobile number"
              type="number"
              error={errors.mobile}
              register={register("mobile", {
                required: "Mobile number is required.",
                minLength: {
                  value: 10,
                  message: "Min length should be 10.",
                },
                maxLength: {
                  value: 10,
                  message: "Max length can be 10.",
                },
              })}
            />
          </div>
          <Button
            type="submit"
            text="Proceed"
            loading={loading ? "true" : "false"}
          />
        </form>
      </div>
    </Layout>
  );
};

export default PersonalDetails;
