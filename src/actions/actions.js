const ticketLoaded = (newTickets) => {
  return {
    type: 'TICKETS_LOADED',
    loaded: newTickets
  }
}

const changeFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    filter: filter
  }
}



const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']



const checkAllChange = (e) => {
  return {
    type: 'CHECK_ALL_CHANGE',
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
    checkAll: e.target.checked
  }
}

const onChangeCheckbox = (list) => {
  return {
    type: 'CHANGE_CHECKBOX',
    checkedList: list,
    indeterminate: !!list.length && list.length < plainOptions.length,
    checkAll: list.length === plainOptions.length
  }
}

const VisibilityFilters = {
  showCheaper: 'SHOW_CHEAPER',
  showFaster: 'SHOW_FASTER'
}

export {
  ticketLoaded,
  VisibilityFilters,
  changeFilter,
  checkAllChange,
  onChangeCheckbox
}
