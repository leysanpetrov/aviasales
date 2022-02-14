import React from "react"
import {AviasalesConsumer} from '../AviasalesContext/AviasalesContext'


const WithAviasalesService = () => (Wrapped) => (props) => (
      <AviasalesConsumer>
        {
          (aviasalesServices) => (<Wrapped {...props}
                             aviasalesServices={aviasalesServices}/>)
        }
      </AviasalesConsumer>
    )

export default WithAviasalesService