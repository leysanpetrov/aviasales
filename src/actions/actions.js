const ticketLoaded = (newTickets) => ({
  type: 'FETCH_TICKETS_SUCCESS',
  loaded: newTickets
})

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter
})

const ticketsRequested = () => ({
  type: 'FETCH_TICKETS_REQUEST'
})

const ticketsError = (error) => ({
  type: 'FETCH_TICKETS_FAILURE',
  loaded: error
})

const disableLoader = () => ({
  type: 'LOADING_IS_COMPLETE'
})

// const fetchTickets1 = (aviasalesServices, dispatch) => async () => {
//   dispatch(ticketsRequested())
//   try {
//     await aviasalesServices.getSearchId()
//     for (let i = false; i !== true;) {
//
//       // eslint-disable-next-line no-await-in-loop
//       const response = await aviasalesServices.getTickets()
//       if (response) {
//         if (response.stop === true) {
//           dispatch(disableLoader())
//           break
//         }
//       }
//       dispatch(ticketLoaded(response.tickets))
//     }
//   } catch (error) {
//     dispatch(disableLoader())
//     dispatch(ticketsError(error))
//   }
// }


const fetchTickets = (aviasalesServices) => (dispatch) => {
  console.log("fetchTickets")
  dispatch(ticketsRequested())
  console.log(aviasalesServices)
  aviasalesServices.getSearchId()
    .then(async () => {
      console.log("in")
      for (let i = false; i !== true;) {
        console.log("в цикле")
        // eslint-disable-next-line no-await-in-loop
        const response = await aviasalesServices.getTickets()
        if (response) {
          console.log(response.stop)
          if (response.stop === true) {
            console.log(response.stop)
            dispatch(disableLoader())
            break
          }
        }
        dispatch(ticketLoaded(response.tickets))
      }
    })
    .catch((error) => {
      dispatch(disableLoader())
      dispatch(ticketsError(error))
    })
}

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

// eslint-disable-next-line id-length
const checkAllChange = (e) => ({
  type: 'CHECK_ALL_CHANGE',
  checkedList: e.target.checked ? plainOptions : [],
  indeterminate: false,
  checkAll: e.target.checked
})

const onChangeCheckbox = (list) => ({
  type: 'CHANGE_CHECKBOX',
  checkedList: list,
  indeterminate: !!list.length && list.length < plainOptions.length,
  checkAll: list.length === plainOptions.length
})

const VisibilityFilters = {
  showCheaper: 'SHOW_CHEAPER',
  showFaster: 'SHOW_FASTER'
}

export {
  VisibilityFilters,
  changeFilter,
  checkAllChange,
  onChangeCheckbox,
  fetchTickets,
}
