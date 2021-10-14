import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Input from "../components/Input";
import { RegisterUser } from "../features/actions/UserActions";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const onSubmit = async (data) => {
    setLoading(true);
    await dispatch(RegisterUser(data));
    setLoading(false);
  };
  return (
    <Layout>
      {/* {JSON.stringify(state)} */}
      {loading ? (
        <div>Laoding</div>
      ) : (
        <div className="card p-4 col-lg-4 col-md-6 col-sm-10 col-xs-10 border-primary">
          <form onSubmit={handleSubmit(onSubmit)}>
            {state.error && (
              <div className="text-danger">{state.error.message} </div>
            )}
            <Input
              name="email"
              type="email"
              label="Email address"
              register={register("email")}
            />
            <Input
              name="passowrd"
              type="password"
              label="Passowrd"
              register={register("password")}
            />

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default Register;
