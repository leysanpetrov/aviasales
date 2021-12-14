import React, { Component } from 'react'
import FlightCard from '../FlightCard/FlightCard'
import classes from './TicketList.module.scss'
import { connect } from 'react-redux'
import { ticketLoaded } from '../../actions/actions'
import WithAviasalesService from '../hoc/WithAviasalesService'
import compose from '../../Utilities/compose'

class TicketsList extends Component {

  componentDidMount () {
    const { aviasalesServices } = this.props
    aviasalesServices.getTickets()
      .then((tickets) => {
        this.props.ticketLoaded(tickets)
      })
  }

  render () {
    const { tickets, filter, checkedList } = this.props
    // console.log(this.props)
    // const errorAlert = <Alert
    //   className="alert"
    //   message="SORRY!"
    //   description="something has gone terribly wrong (but we try to fix it)"
    //   type="error"
    // />
    //
    // const errorMessage = error ? errorAlert : null

    const allDuration = (ticket) => {
      return ticket.durationTo + ticket.durationBack
    }

    const checkedListLength = checkedList.map((item) => parseInt(item))
    console.log(checkedListLength)

    const ticketsList = tickets
      .filter((ticket) => checkedListLength.includes(ticket.stopsTo.length || ticket.stopsBack.length))
      .sort((ticket1, ticket2) => {
        if (filter === 'SHOW_CHEAPER') {
          return ticket1.price - ticket2.price
        }
        if (filter === 'SHOW_FASTER') {
          return allDuration(ticket1) - allDuration(ticket2)
        }
      })
      .slice(0, 5)
      .map((ticket) => {
        return (
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
        {/*{errorMessage}*/}
        {ticketsList}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    filter: state.filter,
    checkedList: state.checkedList
  }
}

const mapDispatchToProps = {
  ticketLoaded
}

export default compose(
  WithAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TicketsList)

