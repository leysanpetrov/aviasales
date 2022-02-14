import React from "react"
import classes from "./App.module.scss"
import Logo from "../Static/Logo.png"
import Navigation from '../components/Navigation/Navigation'
import Transfer from "../components/Transfer/Transfer"
import TicketsListContainer from '../components/TicketList/TicketList'


const App = () =>
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="Logo" />
      <div className={classes.containerContent}>
        <Transfer />
        <div className={classes.containerFlight}>
          <Navigation />
          <TicketsListContainer />
        </div>
      </div>
    </div>

export default App
