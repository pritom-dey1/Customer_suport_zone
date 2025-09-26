import React from 'react'
import Vector from '../../assets/vector1.png'
const Resolved = ({ resolvedCount }) => {
  return (
    <div className="resolved_box">
      <img className="left" src={Vector} alt="" />
      <img className="right" src={Vector} alt="" />
      <p>Resolved</p>
      <span>{resolvedCount}</span>
    </div>
  );
};

export default Resolved