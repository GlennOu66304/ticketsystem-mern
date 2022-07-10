import React, { useState, useEffect } from "react";
import "./ticketsList.css";
import { FaArrowLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/topBar/TopBar";
import Ticket from "../../components/ticket/Ticket";
import { loadtickets } from "../../redux/auth/slice";
function TicketsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadtickets());
  }, [dispatch]);
  const tickets = useSelector((state) => state.tickets);
  console.log(tickets);
  return (
    <div className="tickets-list">
      <TopBar />
      <h2>Ticket</h2>
      {/* go back tab will trigger the router to go back to the previus page */}
      <FaArrowLeft />

      <h3>Back</h3>

      {/* taable section :date,products,status*/}
      <div>
        <span>Create At Date</span>
        <span>desc</span>
      </div>

      {/* table data :data of date, produca name, status, button to trigger the ticket details*/}
      {tickets.map(item => (
        <Ticket key={item.id} item={item} />
      ))}
      {/* tickets.map to render the component to achievement */}
    </div>
  );
}
export default withRouter(TicketsList);
