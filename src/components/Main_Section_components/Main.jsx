import React, { use } from 'react'
import CustomerTicket from './CustomerTicket'
import Activity from './Activity'
const Main = ({tickets}) => {
    const TicketsData = use(tickets);
  return (
    <div className='main_section'>
    <CustomerTicket TicketsData = {TicketsData}></CustomerTicket>
    <Activity></Activity>
    </div>
  )
}

export default Main