import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { LoginUser } from "../features/actions/UserActions";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    await dispatch(LoginUser(data));
  };
  return (
    <Layout>
      <div
        className="d-flex justify-content-center align-items-center p-2 m-2"
        style={{ height: "90vh" }}
      >
        <div className="card p-4 col-lg-4 col-md-6 col-sm-10 col-xs-10 border">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              type="submit"
              text="Login"
              loading={loading}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
