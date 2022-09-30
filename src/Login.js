import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";

const Login = () => {
  let navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!value.email) {
      emailError = "please enter email address";
    } else if (!value.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!value.password) {
      passwordError = "please enter password";
    } else if (value.password.length < 8) {
      passwordError = "password length minimum 8 characters";
    }

    if (emailError) {
      setError({ emailError});
      return false;
    }
    if (passwordError) {
      setError({ passwordError});
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
        navigate("./");
    }
  };

  return (
    <div className="container login">
      <div className="d-flex flex-row-reverse mb-3">
        <Button onClick={()=>navigate("/signup")} label="Signup" isNavbar={true} />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <Input
          htmlFor="email"
          id="login-email"
          type="email"
          label="Your email"
          placeholder="Enter your email"
          value={value.email}
          onChange={handleChange}
        />
        <div className="error-message">{error.emailError}</div>
        <Input
          htmlFor="password"
          id="login-password"
          type="password"
          label="Your password"
          placeholder="Enter your password"
          value={value.password}
          onChange={handleChange}
        />
        <div className="error-message">{error.passwordError}</div>
        <Button onClick={handleSubmit} label="Login" isNavbar={false} />
      </form>
    </div>
  );
};

export default Login;
