import React from 'react'
import Progress from './Progress'
import Resolved from './Resolved'

const Banner = () => {
  return (
    <div className="banner">
        <Progress></Progress>
        <Resolved></Resolved>
    </div>
  )
}

export default Banner