import "./login.css";
import { useRef } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/auth/slice";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
function Login(props) {
  const email = useRef();
  const password = useRef();
  const jwt = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const history = useHistory();
  // useEffect(() => {
  //   if (jwt !== null) {
  //     history.push("/dashboard");
  //   }
  // }, [jwt]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      signIn({ email: email.current.value, password: password.current.value })
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        {/* login left */}
        <div className="loginLeft">
          <h3 className="loginLogo">
            <FaSignInAlt /> Login
          </h3>
          <span className="loginDesc">Please Login to get Support</span>
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
            <button className="loginButton">Submit</button>
            <span className="loginForget">Forgot Password?</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
