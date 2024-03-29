
import FactoryTickets from "../Factory/Factory"

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

    if (!res.ok) {
      throw new Error(`Could not fetch ${fullWay}` + `, received ${res.status}`);
    }
      return res.json();
  };

  getTickets = async () => {
    const res = await this.getResource();
    return res.tickets.slice(0,5).map(FactoryTickets)
  };
}
