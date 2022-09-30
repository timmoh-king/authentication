import React from "react";
import '../App.css'

const Input = ({htmlFor, label, type, id, placeholder, onChange }) => {
  return (
    <div className="my-3">
      <label htmlFor={htmlFor} className="form-label h5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control"
        required
        // aria-describedby="passwordHelpBlock"
      />
    </div>
  );
};

export default Input;
