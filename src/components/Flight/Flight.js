import React from "react"
import classes from "./Flight.module.scss"

const Flight = ({cityCode1, cityCode2, departureDate, stops, duration}) => {

  const timeToString = (time) => {
    const diffInHrs = time / 60
    const hh = Math.floor(diffInHrs)

    const diffInMin = (diffInHrs - hh) * 60
    const mm = Math.floor(diffInMin)

    const formattedHH = hh.toString().padStart(2, '0')
    const formattedMM = mm.toString().padStart(2, '0')

    return `${formattedHH}ч${formattedMM}м`
  }

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

  const getTime = (date) => {
    return `${new Date(date).getUTCHours().toString().padStart(2, '0')}:${new Date(date).getUTCMinutes().toString().padStart(2, '0')}`
  }

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