import React from "react";
import classes from "./ErrorIndicator.module.scss"

const ErrorIndicator = ({ message }) => <div  className={classes.error}>{message}</div>

export default ErrorIndicator
