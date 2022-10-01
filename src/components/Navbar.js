import React from "react";
import { useNavigate } from 'react-router-dom'
import Button from "./Button";

const Navbar = () => {
  let navigate = useNavigate()

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Dev@Deakin</p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="d-flex">
            <Button onClick={()=>navigate("/login")} isNavbar={true} label="logout" />
            <div className="mx-2">
            <Button onClick={()=>navigate("/login")} isNavbar={true} label="login" />
            </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
