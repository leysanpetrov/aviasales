import React from "react"
import classes from "./FlightCard.module.scss"
import Flight from "../Flight/Flight"
import S7Logo from '../../Static/S7Logo.png'

const FlightCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div className={classes.price}>13 400 P</div>
        <img className={classes.airline} src={S7Logo} alt="S7Logo" />
      </div>
      <div className={classes.containerFlight}>
        <Flight />
        <Flight />
      </div>
    </div>
  )
}

export default FlightCard