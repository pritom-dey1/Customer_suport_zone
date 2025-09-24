import React from 'react'
import Vector from '../../assets/vector1.png'
const Progress = () => {
  return (
    <div className='progress_box'>
         <img className='left' src={Vector} alt="" />
        <img className='right' src={Vector} alt="" />
        <p>In-Progress</p>
        <span>0</span>
    </div>
  )
}

export default Progress