import React from 'react'
import TaskStatus from './TaskStatus'
import Resolved from './Resolved'

const Activity = () => {
  return (
   <div className="activity">
    <TaskStatus></TaskStatus>
    <Resolved></Resolved>
   </div>
  )
}
    
export default Activity