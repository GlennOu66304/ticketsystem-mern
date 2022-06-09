import "./topBar.css";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/auth/slice";
import { useSelector, useDispatch } from "react-redux";
export default function TopBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const isLogin = user.token ? true : false;

  const logout = () => {
    dispatch(logOut());
  };
  return isLogin ? (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        {/* logout */}
        <button onClick={logout} className="logout">
          <FaUserAlt /> Logout
        </button>
      </div>
    </div>
  ) : (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        {/* login */}
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <FaSignInAlt /> Login
        </Link>
        {/* register */}
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <FaUserAlt /> Register
        </Link>
      </div>
    </div>
  );
}
