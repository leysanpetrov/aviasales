
const initialState = {
  tickets: [],
  filter: 'SHOW_CHEAPER',
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'],
  indeterminate: true,
  checkAll: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "TICKETS_LOADED":
      return {
        ...state,
        tickets: action.loaded
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