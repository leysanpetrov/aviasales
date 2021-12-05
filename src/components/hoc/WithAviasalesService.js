import React from "react"
import {AviasalesConsumer} from '../AviasalesContext/AviasalesContext'


const WithAviasalesService = () => (Wrapped) => {

  return (props) => {
    return (
      <AviasalesConsumer>
        {
          (aviasalesServices) => {
            return (<Wrapped {...props}
                             aviasalesServices={aviasalesServices}/>)
          }
        }
      </AviasalesConsumer>
    )
  }
}

export default WithAviasalesService