import React, { use } from 'react'
import CustomerTicket from './CustomerTicket'
import Activity from './Activity'
const Main = ({ tickets, setProgress, taskStatus, setTaskStatus, resolvedCount, setResolvedCount, resolvedTasks, setResolvedTasks }) => {
  const TicketsData = use(tickets);

  return (
    <div className="main_section">
      <CustomerTicket
        setProgress={setProgress}
        TicketsData={TicketsData}
        taskStatus={taskStatus}
        setTaskStatus={setTaskStatus}
        resolvedTasks={resolvedTasks}  
      />
<Activity
resolvedTasks={resolvedTasks}
  taskStatus={taskStatus}
  setTaskStatus={setTaskStatus}
  setProgress={setProgress}
  resolvedCount={resolvedCount}       
  setResolvedCount={setResolvedCount}
  setResolvedTasks={setResolvedTasks} 
/>
    </div>
  );
};


export default Main