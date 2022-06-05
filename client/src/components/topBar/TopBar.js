import "./topBar.css";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
// import { useContext } from "react";

export default function TopBar() {
  //   const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        {/* login */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <FaSignInAlt /> Login
        </Link>
        {/* register */}
        <Link to="/register" style={{ textDecoration: "none" }}>
          <FaUserAlt /> Register
        </Link>
      </div>
    </div>
  );
}
