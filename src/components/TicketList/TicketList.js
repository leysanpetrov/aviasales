import React, { Component } from 'react'
import FlightCard from '../FlightCard/FlightCard'
import classes from './TicketList.module.scss'
// import {bindActionCreators} from "redux"
import { Alert } from 'antd'
import { connect } from 'react-redux'
// import ticketLoaded from "../../actions/actions"
import WithAviasalesService from '../hoc/WithAviasalesService'
import compose from "../../Utilities/compose";
import store from "../../Store"

class TicketsList extends Component {

  componentDidMount () {
    // получить данные
    const { aviasalesServices} = this.props
    // console.log(this.props)
    aviasalesServices.getTickets()
      .then((tickets) => {
        this.props.ticketLoaded(tickets)
        // console.log(this.props)
      })
    // передать действи я в сторе
  }

  render () {

    const { tickets } = this.props
    // console.log(this.props)
    // console.log(tickets)
    // const errorAlert = <Alert
    //   className="alert"
    //   message="SORRY!"
    //   description="something has gone terribly wrong (but we try to fix it)"
    //   type="error"
    // />
    //
    // const errorMessage = error ? errorAlert : null

    const ticketsList = tickets?.map((ticket) => {
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
  console.log("mapStateToProps")
  // console.log(state)
  return {
    tickets: state.tickets
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps")
  return {
    ticketLoaded: (newTicket) => {
      console.log(dispatch({
        type: "TICKETS_LOADED",
        loaded: newTicket
      }))
      // console.log(newTicket)
      dispatch({
        type: "TICKETS_LOADED",
        loaded: newTicket
      })
    }
  }
};

export default compose(
  WithAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(TicketsList)

