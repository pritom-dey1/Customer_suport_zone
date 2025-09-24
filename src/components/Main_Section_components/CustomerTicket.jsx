import React from "react";
import Ticket from "./Ticket";

const CustomerTicket = ({ TicketsData }) => {
  return (
    <div className="customer_ticket">
      <h2>Customer Tickets</h2>
      <div className="ticket_box">
        {TicketsData.map((ticket) => (
          <Ticket key={ticket.id} Ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default CustomerTicket;
