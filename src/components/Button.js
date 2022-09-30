import React from "react";

const Button = ({ label, onClick, isNavbar }) => {
  return (
    <div>
      {isNavbar ? (
        <div>
          <button onClick={onClick} className="btn btn-primary btn-md">
            {label}
          </button>
        </div>
      ) : (
        <div className="d-grid gap-2 mx-auto mt-3">
          <button className="btn btn-primary" type="button">
            {label}
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
