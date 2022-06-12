import React from "react";
import "./ticketsList.css";
import { FaArrowLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";
import TopBar from "../../components/topBar/TopBar";
function TicketsList(props) {
  // const token = useSelector((state) => state.user.token);
  const getData = () => {
    axios.get("http://localhost:8800/api/ticket", {
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `${token}`,
      // },
    });
  };

  return (
    <div className="tickets-list">
      <TopBar />
      <h2 onClick={getData}>Ticket</h2>
      {/* go back tab will trigger the router to go back to the previus page */}
      <FaArrowLeft />

      <h3>Back</h3>

      {/* taable section :date,products,status*/}
      {/* table data :data of date, produca name, status, button to trigger the ticket details*/}
    </div>
  );
}
export default withRouter(TicketsList);
