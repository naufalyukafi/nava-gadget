import React from 'react';
import "../styleComponent.css";
import { Link, useHistory } from "react-router-dom";
import { message } from 'antd';
import firebase from "../../firebase"
const Context = React.createContext({ name: 'Default' });
const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();
  const messageSucces = () => {
    message.success("You are loggedin")
  }
  const messageError = () => {
    message.error("email or password wrong!")
  }
  return (
    // <!-- Main Container -->
    <div className="container">

      {/* <!-- Form Container --> */}
      <div className="forms-container">

        {/* <!-- Signin and Signup Container --> */}
        <div className="signin-signup">

          {/* <!-- Signin Form --> */}
          <form action="#" className="sign-in-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="email" name="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={login} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href={'/'} className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={'/'} className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={'/'} className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href={'/'} className="social-icon">
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
            <h3 style={{ color: "white", letterSpacing: "4px" }}>NAVA GADGET STORE</h3>
            <p>
              Don't find the devices that you looking for ? find it on Nava Gadget Store    Choose, Buy, and Enjoy.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              <Link style={{ color: "white" }} to="/auth/register">Sign Up</Link>
            </button>
          </div>
          <img src="/img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div >
  );

  async function login() {
    try {
      await firebase.login(email, password)
      messageSucces()
      history.push("/project")
    } catch {
      messageError()
    }
  }

};


export default LoginPage;
