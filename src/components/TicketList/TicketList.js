import React, { Fragment } from 'react'
import FlightCard from '../FlightCard/FlightCard'
import classes from "./TicketList.module.scss"

const TicketsList = ({tickets}) => {
      const ticketsList = tickets?.map((ticket) => {
        return(
          <li className={classes.ticket} key={tickets.indexOf(ticket)}>
            <FlightCard
              price={ticket.price}
              carrier={ticket.carrier}
            cityCode1To={ticket.cityCode1To}
            cityCode2To={ticket.cityCode2To}
            dateTo={ticket.dateTo}
            stopsTo={ticket.stopsTo}
            durationTo={ticket.durationTo}
            cityCodeBack={ticket.cityCodeBack}
            cityCode2Back={ticket.cityCode2Back}
            dateBack={ticket.dateBack}
            stopsBack={ticket.stopsBack}
            durationBack={ticket.durationBack}
            />
          </li>
        )
      })
  return (
    <ul className={classes.ticketList}>
      {ticketsList}
    </ul>
  )
}

export default TicketsList