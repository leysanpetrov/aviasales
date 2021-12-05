
const ticketLoaded = (newTicket) => {
 return {
   type: "TICKETS_LOADED",
   loaded: newTicket
 }
}

export default ticketLoaded
