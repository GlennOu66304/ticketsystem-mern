// import React, { useState } from "react";
import "./createTicket.css";
import { withRouter } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
function CreateTicket(props) {
  return (
    <div className="tickets-list">
      <TopBar />
      <h2>this is the CreateTicket page</h2>
    </div>
  );
}
export default withRouter(CreateTicket);
