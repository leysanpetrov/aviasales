import React from "react"
import classes from "./App.module.scss"
import Logo from "../Static/Logo.png"
import {WithAviasalesService} from "../components/hoc/WithAviasalesService"
import Navigation from '../components/Navigation/Navigation'
import Transfer from "../components/Transfer/Transfer"
import AviasalesServices from "../Services/AviasalesServices"
import TicketsList from '../components/TicketList/TicketList'


const App = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={Logo} alt="Logo" />
      <div className={classes.containerContent}>
        <Transfer />
        <div className={classes.containerFlight}>
          <Navigation />
          <TicketsList />
        </div>
      </div>
    </div>
  )
}

export default App


// export default class App extends Component {
//
//   state = {
//     tickets: null,
//     error: false
//   };
//
//   onError = () => {
//     this.setState({
//       error: true
//     });
//   };
//
//   aviasales = new AviasalesServices()
//
//
//   async componentDidMount() {
//     await this.aviasales.getSearchId();
//     await this.getSelectedTickets();
//   }
//
//   getSelectedTickets() {
//     this.aviasales
//       .getTickets()
//       .then(( tickets ) => {
//         this.setState({
//           tickets: tickets
//         })
//       })
//       .catch(this.onError);
//   }
//
//   render() {
//     const { tickets, error } = this.state
//     return (
//       <div className={classes.container}>
//         <img className={classes.logo} src={Logo} alt="Logo" />
//         <div className={classes.containerContent}>
//           <Transfer />
//           <div className={classes.containerFlight}>
//             <Navigation />
//             <TicketList
//               tickets={tickets}
//               error={error}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }