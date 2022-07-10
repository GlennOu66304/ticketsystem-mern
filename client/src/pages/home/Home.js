import React from "react";
import { FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="guide-text">
        <h2>What do yu need help with</h2>
        <p>Please choose from an option below</p>
      </div>

      <div className="tickets">
        <div className="create-tickets">
          <Link
            to="/createticket"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="content">
            
              <FaQuestionCircle /> create New Ticket
            </span>
          </Link>
        </div>
        <div className="check-tickets">
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span className="content">
              <FaEnvelope /> View My tickets
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
