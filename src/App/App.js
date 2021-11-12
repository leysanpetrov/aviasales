import React, {Component} from "react"
import classes from "./App.module.scss"
import Logo from "../Static/Logo.png"
import Navigation from '../components/Navigation/Navigation'
import FlightCard from "../components/FlightCard/FlightCard"
import Transfer from "../components/Transfer/Transfer"

export default class App extends Component {

  render() {
    return (
      <div className={classes.container}>
          <img className={classes.logo} src={Logo} alt="Logo" />
          <div className={classes.containerContent}>
            <Transfer />
            <div className={classes.containerFlight}>
              <Navigation />
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
              <FlightCard />
            </div>
          </div>

      </div>
    )
  }
}

// <Transfer>
//   <Navigation />
//   <Flight />