import React from "react";
import Ticket from "./Ticket";
import { toast } from "react-toastify";

const CustomerTicket = ({ TicketsData, setProgress, setTaskStatus, taskStatus, resolvedTasks }) => {
  const availableTickets = TicketsData.filter(
    (ticket) => !resolvedTasks.some((resolved) => resolved.id === ticket.id)
  );

  const handleAddTask = (ticket) => {
    setTaskStatus((prev) => [...prev, ticket]);

    setProgress((prev) => prev + 1);

    toast.info(`Task added to progress: ${ticket.title || ticket.name}`);
  };

  return (
    <div className="customer_ticket">
      <h2>Customer Tickets</h2>
      <div className="ticket_box">
        {availableTickets.length > 0 ? (
          availableTickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              Ticket={ticket}
              taskStatus={taskStatus}
              setTaskStatus={setTaskStatus}
              setProgress={setProgress}
              onAddTask={() => handleAddTask(ticket)}
            />
          ))
        ) : (
          <p>No more customer tickets available</p>
        )}
      </div>
    </div>
  );
};

export default CustomerTicket;
