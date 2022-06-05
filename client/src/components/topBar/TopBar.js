import "./topBar.css";
import {  Person, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function TopBar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Support Desk</span>
        </Link>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
           
          </div>

          <div className="topbarIconItem">
            <Notifications />
          
          </div>
        </div>
      </div>
    </div>
  );
}
