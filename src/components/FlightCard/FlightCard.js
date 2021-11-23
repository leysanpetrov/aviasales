import React from "react"
import classes from "./FlightCard.module.scss"
import Flight from "../Flight/Flight"
import priceWithSpaces from "../../Utilities/Utillites"

const FlightCard = ({price, carrier, cityCode1To, cityCode2To, dateTo, stopsTo, durationTo,
                     cityCodeBack, cityCode2Back, dateBack, stopsBack, durationBack }) => {

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <div className={classes.price}>{priceWithSpaces(price)} P</div>
        <img className={classes.airline} src={`http://pics.avs.io/99/36/${carrier}.png`} alt="S7Logo" />
      </div>
      <div className={classes.containerFlight}>
        <Flight
          cityCode1={cityCode1To}
          cityCode2={cityCode2To}
          departureDate={dateTo}
          stops={stopsTo}
          duration={durationTo}
        />
        <Flight
          cityCode1={cityCodeBack}
          cityCode2={cityCode2Back}
          departureDate={dateBack}
          stops={stopsBack}
          duration={durationBack}
        />
      </div>
    </div>
  )
}

export default FlightCard