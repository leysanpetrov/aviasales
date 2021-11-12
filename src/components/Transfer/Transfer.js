import React from "react";
import classes from "./Transfer.module.scss";

import { Checkbox } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const Transfer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </div>
      <Checkbox.Group className={classes.checkbox} options={plainOptions} defaultValue={['Все']} onChange={onChange} />
    </div>
  )
}

export default Transfer