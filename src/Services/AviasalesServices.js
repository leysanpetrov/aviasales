
export default class AviasalesServices {

  _searchId = ""

  _urlSearchId = "https://front-test.beta.aviasales.ru/search"

  _apiBase = "https://front-test.beta.aviasales.ru/tickets"

  getSearchId = async () => {
    const res = await fetch(`${this._urlSearchId}`);
    const result = await res.json();
    this._searchId = result.searchId;
  }

  getResource = async () => {
    const fullWay = `${this._apiBase}?searchId=${this._searchId}`;
    /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
    const res = await fetch(fullWay);
    const result = await res.json();
      return result;
  };

  getTickets = async () => {
    const res = await this.getResource();
    return res.tickets.slice(0,5).map(this._constructorTickets)
  };

  _constructorTickets = (ticket) => {
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
}
