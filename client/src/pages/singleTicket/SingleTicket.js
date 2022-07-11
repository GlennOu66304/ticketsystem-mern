// import React, { useState } from "react";
import "./singleTicket.css";
import { withRouter, useParams } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
function SignleTicket(props) {
  let { id } = useParams();
  return (
    <div className="single-ticket">
      <TopBar />
      <h2>this is the signleTicket page:{id}</h2>
    </div>
  );
}
export default withRouter(SignleTicket);
