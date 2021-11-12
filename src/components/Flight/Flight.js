import React from "react"
import classes from "./Flight.module.scss"

const Flight = () => {
  return (
    <div className={classes.container}>
      <div className={classes.flight}>
        <div className={classes.title}>MOW – HKT</div>
        <div>10:45 – 08:00</div>
      </div>
      <div className={classes.travelTime}>
        <div className={classes.title}>В ПУТИ</div>
        <div>21ч 15м</div>
      </div>
      <div className={classes.transfer}>
        <div className={classes.title}>2 ПЕРЕСАДКИ</div>
        <div>HKG, JNB</div>
      </div>
    </div>
  )
}

export default Flight