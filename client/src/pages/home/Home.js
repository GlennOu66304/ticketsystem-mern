import React from "react";
import { FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>What do yu need help with</h1>
      <p>Please choose from an option below</p>

      <div className="create-tickets">
        <Link
          to="/createticket"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FaQuestionCircle />
          <span>create New Ticket</span>
        </Link>
      </div>
      <div className="check-tickets">
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FaEnvelope />
          <span> View My tickets</span>
        </Link>
      </div>
    </div>
  );
}
