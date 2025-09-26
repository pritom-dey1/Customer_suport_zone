import React from 'react'
import Progress from './Progress'
import Resolved from './Resolved'

const Banner = ({ progress ,resolvedCount}) => {
  return (
    <div className="banner">
        <Progress progress={progress}></Progress>
        <Resolved resolvedCount={resolvedCount}></Resolved>
    </div>
  )
}

export default Banner