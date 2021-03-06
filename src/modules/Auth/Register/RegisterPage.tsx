import React from 'react';
import "../styleComponent.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../firebase";
import { message } from 'antd';
const RegisterPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();

  const menageError = () => {
    message.error("cannot register, please correct again!");
  }

  return (
    // <!-- Main Container -->
    <div className="container">

      {/* <!-- Form Container --> */}
      <div className="forms-container">

        {/* <!-- Signin and Signup Container --> */}
        <div className="signin-signup">

          {/* <!-- SignUp Form --> */}
          <form action="#" className="sign-in-form" onSubmit={e => e.preventDefault()}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" onClick={onRegister} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href={"/"} className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={"/"} className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={"/"} className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href={"/"} className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Panel Container --> */}
      <div className="panels-container">

        {/* <!-- Left Panel Container --> */}
        <div className="panel left-panel">
          <div className="content">
            <h3 style={{ color: "white", letterSpacing: "4px" }}>One Of Us ?</h3>
            <p>
              Don't find the devices that you looking for ? find it on Nava Gadget Store    Choose, Buy, and Enjoy.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              <Link style={{ color: "white" }} to="/auth/login">Sign In</Link>
            </button>
          </div>
          <img src="/img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password)
      history.push("/project")
      message.success('You are loggedin')
    } catch {
      menageError()
    }
  }

};

export default RegisterPage;

