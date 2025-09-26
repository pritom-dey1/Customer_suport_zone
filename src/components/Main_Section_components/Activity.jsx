import React from 'react'
import TaskStatus from './TaskStatus'
import Resolved from './Resolved'

const Activity = ({ taskStatus, setTaskStatus, setResolvedCount, setProgress, resolvedCount, setResolvedTasks ,resolvedTasks}) => {
  return (
    <div className="activity">
      <TaskStatus
        taskStatus={taskStatus}
        setTaskStatus={setTaskStatus}
        setResolvedCount={setResolvedCount}
        setProgress={setProgress}
        setResolvedTasks={setResolvedTasks}
      />
      <Resolved resolvedCount={resolvedCount} resolvedTasks={resolvedTasks}  />   
    </div>
  );
};

    
export default Activity