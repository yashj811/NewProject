import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Layout from "../layouts/Layout";
import Button from "../components/Button";
import { GetBasicInfo } from "../features/actions/ResumeActions";
import { GET_RESUME_ERRORS } from "../features/constants";

const PersonalDetails = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.resume.error);
  const history = useHistory();

  const onSubmit = async (data) => {
    await dispatch(GetBasicInfo(data));
    if (!errors) {
      history.push("/register");
    }
  };
  return (
    <Layout>
      <>
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors && errors.message}
          <div className="mb-3">
            <Input
              name="firstname"
              label="First Name"
              type="text"
              register={register("firstname")}
            />
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="lastname"
              label="Last Name"
              type="text"
              register={register("lastname")}
            />
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="email"
              label="Email address"
              type="email"
              register={register("email")}
            />
          </div>
          <div className="mb-3">
            {" "}
            <Input
              name="mobile"
              label="Mobile number"
              type="number"
              register={register("mobile")}
            />
          </div>
          <Button type="submit" text="Proceed" />
        </form>
      </>
    </Layout>
  );
};

export default PersonalDetails;
