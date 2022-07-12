// import React, { useState } from "react";
import "./singleTicket.css";
import { withRouter, useParams,useHistory } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
import { FaArrowLeft } from "react-icons/fa";
function SignleTicket(props) {
  let { id } = useParams();
  const history = useHistory();
  return (
    <div className="single-ticket">
      <TopBar />
      <div className="goback" onClick={history.goBack}>
        {/* go back tab will trigger the router to go back to the previus page */}
        <FaArrowLeft />
        Back
      </div>
      <h2>this is the signleTicket page:{id}</h2>
    </div>
  );
}
export default withRouter(SignleTicket);
