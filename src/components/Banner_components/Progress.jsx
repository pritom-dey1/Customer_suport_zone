import React from 'react'
import Vector from '../../assets/vector1.png'

const Progress = ({progress}) => {
  return (
    <div className='progress_box'>
      <img className='left' src={Vector} alt="" />
      <img className='right' src={Vector} alt="" />
      <p>In-Progress</p>
      <span>{progress}</span>
    </div>
  )
}

export default Progress
