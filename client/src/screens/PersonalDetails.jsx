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
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.resume);
  const history = useHistory();
  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    await dispatch(GetBasicInfo(data));
    // history.push("/register");
  };

  useEffect(() => {
    if (error) {
      setShow(true);
    }
  }, [error]);
  return (
    <Layout>
      <>
        {" "}
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
          <Button
            type="submit"
            text="Proceed"
            loading={loading == true ? "true" : "false"}
          />
        </form>
      </>
    </Layout>
  );
};

export default PersonalDetails;
