import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";

const Signup = () => {
    let navigate = useNavigate();

    const [value, setValue] = useState({
        name: "",
        email: "", 
        password: "",
        password2: ""
    })

    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        password2Error: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue({
          ...value,
          [name]: value,
        });
      };

      const validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let password2Error = "";
    
        if (!value.name) {
          nameError = "name cannot be blank";
        }
    
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
    
        if (!value.password2) {
          password2Error = "please confirm password";
        } else if (value.password2 !== value.password) {
          password2Error = "passwords do not match";
        }
    
        if (emailError || nameError) {
          setError({ emailError, nameError });
          return false;
        }
        if (passwordError || password2Error) {
          setError({ passwordError, password2Error });
          return false;
        }
    
        return true;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            navigate("/");
        }
      };

  return (
    <div className="container signup">
      <p className="h3 mx-3">Create a DEV@Deakin Account</p>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          htmlFor="name"
          id="name"
          type="text"
          label="Name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <div className="error-message">
              {error.nameError}
            </div>
        <Input
          htmlFor="email"
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <div className="error-message">
              {error.emailError}
            </div>
        <Input
          htmlFor="password"
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <div className="error-message">
              {error.passwordError}
            </div>
        <Input
          htmlFor="password2"
          id="password2"
          type="password"
          label="Confirm"
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <div className="error-message">
              {error.password2Error}
            </div>
        <Button onClick={handleSubmit} label="Signup" isNavbar={false} />
      </form>
    </div>
  );
};

export default Signup;
