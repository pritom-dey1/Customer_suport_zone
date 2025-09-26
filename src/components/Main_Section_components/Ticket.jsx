import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Ticket = ({ Ticket ,setProgress ,setTaskStatus , }) => {
  const priorityClass = {
    High: "priority high",
    Critical: "priority critical",
    Medium: "priority medium",
    Low: "priority low",
  };

  const statusClass = {
    Open: "status open",
    "In Progress": "status progress",
    Resolved: "status resolved",
  };
  const handleProgress = () => {
    setTaskStatus((prevTasks) => [...prevTasks, Ticket]);
     setProgress((prev) => prev + 1);
      toast.info(`Ticket "${Ticket.title}" is now In Progress!`); 
  };

  return (
    <div className="ticket_card" onClick={handleProgress}>
      <div className="ticket_header">
        <h3 className="ticket_title">{Ticket.title}</h3>
        <span className={statusClass[Ticket.status]}>{Ticket.status}</span>
      </div>

      <p className="ticket_description">{Ticket.description}</p>


      <div className="ticket_footer">
        <div className="left">
          <span className="ticket_id">#{Ticket.id}</span>
          <span className={priorityClass[Ticket.priority]}>
            {Ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>
        <div className="right">
          <span className="customer">{Ticket.customer}</span>
          <FaCalendarAlt className="calendar_icon" />
          <span className="date">
            {new Date(Ticket.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
