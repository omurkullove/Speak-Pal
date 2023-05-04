import React from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import avatar from "../../img/avatar.png";
import vectorImg from "../../img/imgBg.png";
import googleImg from "../../img/google.png";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Ne udalosy avtorizovatsya");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    reset();

    if (isAuth) {
      return <Navigate to="/" />;
    }
  };

  return (
    <section className="contact">
      <div className="container contact__container">
        <h1 className="login__title">Login</h1>
        <div className="contact__wrapper">
          <div className="contact__col">
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
              <label>
                <label>Email</label>
                <input
                  placeholder="Jhon@company.com"
                  {...register("email", {
                    required: "Email doljno bity zapolnenno!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                      message: "Vvedite pravilniy login!",
                    },
                  })}
                />
              </label>
              <div className="contact__errors">
                {errors?.email && <p>{errors?.email?.message || "Errors!"}</p>}
              </div>

              <label>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: "Ukajite pochtu" })}
                  /*  {...register("password", {
                    required: "Password doljno bity zapolnenno!",
                    pattern: {
                      value:
                        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                      message: "Vvedite korektniy password!",
                    },
                  })} */
                />
              </label>
              <div className="contact__errors">
                {errors?.password && (
                  <p>{errors?.password?.message || "Errors!"}</p>
                )}
              </div>

              <div className="login__remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <Link to="#">Forgot Password?</Link>
              </div>

              <button type="submit" disabled={!isValid}>
                Next
              </button>

              <div className="login__google">
                <p>Or login with Google</p>

                <img src={googleImg} alt="" />
                <Link to="/signUp">Create an acount</Link>
              </div>
            </form>
          </div>

          <div className="contact__right">
            <img src={vectorImg} alt="" />
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
