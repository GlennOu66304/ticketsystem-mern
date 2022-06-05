import React from "react";
import { FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1>What do yu need help with</h1>
      <p>Please choose from an option below</p>

      <div className="create-tickets">
        <FaQuestionCircle />
        <span>create New Ticket</span>
      </div>

      <div className="check-tickets">
        <FaEnvelope />
        <span> View My tickets</span>
      </div>
    </div>
  );
}
