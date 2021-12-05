
const initialState = {
  tickets: []
}

const reducer = (state = initialState, action) => {
  console.log("reducer")
  console.log(action)
  // console.log(action)
  switch (action.type) {
    case "TICKETS_LOADED":
      return {
        tickets: action.Loaded
      }
     default:
       return state
  }
}

export default reducer