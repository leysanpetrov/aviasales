import React, { Component } from "react";
import classes from "./ErrorBoundry.module.scss"
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'


export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }

}
