import React from 'react';

const Resolved = ({ resolvedTasks }) => {
  return (
    <div className='resolved_status'>
      <h2>Resolved</h2>
      <div className="res_box">
        {Array.isArray(resolvedTasks) && resolvedTasks.length > 0 ? (
          resolvedTasks.map((task, index) => (
            <div key={index} className="resolved_item">
              <p><strong>{task.title || task.name}</strong></p>
              <button>RESOLVED</button>
            </div>
          ))
        ) : (
          <p>No resolved tasks yet</p>
        )}
      </div>
    </div>
  );
};

export default Resolved;
