import React from "react";
import "./signUp.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import vectorImg from "../../img/imgBg.png";
import signUpImg from "../../img/signup-img.png";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

const SignUp = () => {
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
        <h1 className="login__title">Registration</h1>
        <div className="contact__wrapper">
          <div className="contact__col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <input
                  placeholder="Name"
                  {...register("name", {
                    required: "Imya doljno bity zapolnenno!",
                    minLength: {
                      value: 3,
                      message: "At least 3 symbol!",
                    },
                  })}
                />
              </label>
              <div className="contact__errors">
                {errors?.name && <p>{errors?.name?.message || "Errors!"}</p>}
              </div>

              <label>
                <input
                  placeholder="Email"
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
                <input
                  placeholder="Password"
                  {...register("password", {
                    required: "Password doljno bity zapolnenno!",
                    pattern: {
                      value:
                        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                      message: "Vvedite pravilniy password!",
                    },
                  })}
                />
              </label>
              <div className="contact__errors">
                {errors?.password && (
                  <p>{errors?.password?.message || "Errors!"}</p>
                )}
              </div>

              <label>
                <input
                  placeholder="Confirm password"
                  {...register("password", {
                    required: "Password doljno bity zapolnenno!",
                    pattern: {
                      value:
                        /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                      message: "Vvedite pravilniy password!",
                    },
                  })}
                />
              </label>
              <div className="contact__errors">
                {errors?.password && (
                  <p>{errors?.password?.message || "Errors!"}</p>
                )}
              </div>

              <button className="signup__btn" type="submit" disabled={!isValid}>
                Next
              </button>
            </form>
          </div>

          <div className="contact__right signup__right">
            <img src={vectorImg} alt="" />
            <img className="signUpImg" src={signUpImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
