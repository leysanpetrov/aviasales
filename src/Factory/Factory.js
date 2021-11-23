const FactoryTickets = (ticket) => {
  return {
    price: ticket.price,
    carrier: ticket.carrier,
    cityCode1To: ticket.segments[0].origin,
    cityCode2To: ticket.segments[0].destination,
    dateTo: ticket.segments[0].date,
    stopsTo: ticket.segments[0].stops,
    durationTo: ticket.segments[0].duration,
    cityCodeBack: ticket.segments[1].origin,
    cityCode2Back: ticket.segments[1].destination,
    dateBack: ticket.segments[1].date,
    stopsBack: ticket.segments[1].stops,
    durationBack: ticket.segments[1].duration,
  };
};

export default FactoryTickets