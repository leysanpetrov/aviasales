import React from "react"
import classes from "./Flight.module.scss"
import getTime from "../../Utilities/getTime"
import timeToString from "../../Utilities/timeToString"

const Flight = ({cityCode1, cityCode2, departureDate, stops, duration}) => {


  let transfer

  if (!stops.length) {
    transfer = "БЕЗ ПЕРЕСАДОК"
  }
  if(stops.length === 1) {
    transfer = "1 ПЕРЕСАДОКА"
  }
  if(stops.length >=2 && stops.length < 5) {
    transfer = `${stops.length} ПЕРЕСАДОКИ`
  }
  if(stops.length >= 5) {
    transfer = `${stops.length} ПЕРЕСАДОК`
  }

  const arrival = new Date(departureDate).getTime() + duration * 60 * 1000

  return (
    <div className={classes.container}>
      <div className={classes.flight}>
        <div className={classes.title}>{cityCode1} – {cityCode2}</div>
        <div>{getTime(departureDate)} – {getTime(arrival)}</div>
      </div>
      <div className={classes.travelTime}>
        <div className={classes.title}>В ПУТИ</div>
        <div>{timeToString(duration)}</div>
      </div>
      <div className={classes.transfer}>
        <div className={classes.title}>{transfer}</div>
        <div>{stops.toString()}</div>
      </div>
    </div>
  )
}

export default Flight