import React from 'react';
import { toast } from 'react-toastify';
const TaskStatus = ({ taskStatus, setTaskStatus, setProgress, setResolvedCount, setResolvedTasks }) => {
  const handleComplete = (index) => {
    const completedTask = taskStatus[index];

    setProgress((prev) => prev - 1);
    setResolvedCount((prev) => prev + 1);
    setResolvedTasks((prev) => [...prev, completedTask]);
    setTaskStatus((prev) => prev.filter((_, i) => i !== index));

    toast.success(`Task resolved: ${completedTask.title || completedTask.name}`);
  };

  return (
    <div className="task_status">
      <h2>Task Status</h2>
      <div className="task_box">
        {Array.isArray(taskStatus) && taskStatus.length > 0 ? (
          taskStatus.map((task, index) => (
            <div key={index} className="task_item">
              <p><strong>{task.title || task.name}</strong></p>
              <button onClick={() => handleComplete(index)}>COMPLETE</button>
            </div>
          ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
};
export default TaskStatus;
