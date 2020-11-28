import React from 'react';
import "./styleComponent.css";
import {Link} from "react-router-dom";
const RegisterPage = () => {
  return (
    //<!-- Main Container -->
    <div className="container">

      {/* <!-- Form Container --> */}
      <div className="forms-container">

        {/* <!-- Signin and Signup Container --> */}
        <div className="signin-signup">
        {/* <!-- Sign up form --> */}
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
          {/* <!--  --> */}
        </div>
      </div>
      {/* <!-- Panel Container --> */}
      <div className="panels-container">
      {/* <!-- Right Panel Container --> */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Get the device you deserve, find it on Nava Gadget Store Choose, Buy, and Enjoy.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              <Link style={{ color:"white"}} to="/auth/register">Sign Up</Link>
            </button>
          </div>
          <img src="/img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
