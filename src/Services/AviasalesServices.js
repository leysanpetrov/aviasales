import FactoryTickets from '../Factory/Factory'

export default class AviasalesServices {
  _urlSearchId = 'https://front-test.beta.aviasales.ru/search'
  _apiBase = 'https://front-test.beta.aviasales.ru/tickets'

  getSearchId = async () => {
    const res = await fetch(`${this._urlSearchId}`)
    const result = await res.json()
    return result.searchId
  }

  getResource = async () => {
    const searchId = await this.getSearchId()
    const fullWay = `${this._apiBase}?searchId=${searchId}`
    /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

    const res = await fetch(fullWay)

    if (!res.ok) {
      throw new Error(`Could not fetch ${fullWay}` + `, received ${res.status}`)
    }
    return res.json()
  }

  getTickets = async () => {
    const res = await this.getResource()
    return res.tickets.map(FactoryTickets)
  }
}
