import React, { useContext } from "react";
import "./login.css";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        {/* login left */}
        <div className="loginLeft">
          <h3 className="loginLogo">Lama Social</h3>
          <span className="loginDesc">
           
            Connect with the friends and world around you on Lamasocial
          </span>
        </div>
        {/* loginRight */}
        <div className="loginRight">
          <form action="" className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="password"
              required
              minLength={6}
              className="loginInput"
              type="password"
              ref={password}
            />
            <button className="loginButton">
             
            </button>
            <span className="loginForget">Forgot Password?</span>
            <button className="loginRegisterbutton">
             
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
