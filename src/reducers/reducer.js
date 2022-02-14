const initialState = {
  tickets: [],
  filter: 'SHOW_CHEAPER',
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  indeterminate: true,
  checkAll: false,
  loading: true,
  error: null,
  page: 1
}

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        error: null
      }
    case "FETCH_TICKETS_SUCCESS":
      return {
        ...state,
        tickets: [...state.tickets, ...action.loaded],
        error: null
      }
    case 'FETCH_TICKETS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.loaded
      }
    case 'LOADING_IS_COMPLETE':
      return {
        ...state,
        loading: false
      }
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page
    }
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    case 'CHECK_ALL_CHANGE':
      return {
        ...state,
        checkedList: action.checkedList,
        indeterminate: action.indeterminate,
        checkAll: action.checkAll
      }
    case 'CHANGE_CHECKBOX':
      return {
        ...state,
        checkedList: action.checkedList,
        indeterminate: action.indeterminate,
        checkAll: action.checkAll
      }
     default:
       return state
  }
}

export default reducer