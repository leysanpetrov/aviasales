import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import FlightCard from '../FlightCard/FlightCard'
import classes from './TicketList.module.scss'
import { fetchTickets } from '../../actions/actions'
import WithAviasalesService from '../hoc/WithAviasalesService'
import compose from '../../Utilities/compose'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

const TicketsList = ({ tickets, checkedListLength, allDuration, filter }) => {
  const ticketsList = tickets
    .filter((ticket) => checkedListLength.includes(ticket.stopsTo.length || ticket.stopsBack.length))
    .sort((ticket1, ticket2) => {
      if (filter === 'SHOW_CHEAPER') {
        return ticket1.price - ticket2.price
      }
      if (filter === 'SHOW_FASTER') {
        return allDuration(ticket1) - allDuration(ticket2)
      }
      return true
    })
    .map((ticket) => (
        <li
          className={classes.ticket}
          key={ticket.carrier + ticket.price + ticket.cityCode1To + ticket.durationTo + ticket.dateTo}
        >
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
      ))
  return (
    <ul className={classes.ticketList}>
      {/* {errorMessage} */}
      {ticketsList}
    </ul>
  )
}

class TicketsListContainer extends Component {

  componentDidMount () {
    this.props.fetchTickets()
  }

  render () {
    const { tickets, filter, checkedList, loading, error } = this.props

    const allDuration = (ticket) => ticket.durationTo + ticket.durationBack

    // eslint-disable-next-line radix
    const checkedListLength = checkedList.map((item) => parseInt(item))

    if (checkedList.length === 0) {
      return <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
    }

    const messageError = "Что-то пошло не так! Попробуйте еще раз!"
    const messageErrorNotFull = "К сожалению удалось загрузить не все билеты!"

    return (
      <React.Fragment>

        {error ? <ErrorIndicator message={!tickets.length ? messageError : messageErrorNotFull}/> : null}
        {loading ? <Spin className="spinner" size="large"/> : null}
        <TicketsList tickets={tickets}
                     allDuration={allDuration}
                     checkedListLength={checkedListLength}
                     filter={filter}/>;
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    tickets: state.tickets,
    filter: state.filter,
    checkedList: state.checkedList,
    loading: state.loading,
    error: state.error
  })

const mapDispatchToProps = (dispatch, { aviasalesServices }) => ({
    fetchTickets: fetchTickets(aviasalesServices, dispatch)
  })

export default compose(
  WithAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(TicketsListContainer)

