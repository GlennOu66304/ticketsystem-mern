import React from "react";
import "./ticketsList.css";
import { withRouter } from "react-router-dom";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
function TicketsList(props) {
  
  return (
    <div className="tickets-list">
      <TopBar />
      <h2>this is the TicketsList page</h2>
    </div>
  );
}
export default withRouter(TicketsList);
