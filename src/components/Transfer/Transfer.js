import React from "react";
import classes from "./Transfer.module.scss";
import { connect } from 'react-redux';
import compose from '../../Utilities/compose';
import { checkAllChange, onChangeCheckbox } from "../../actions/actions";
import { Checkbox } from 'antd';



const Transfer = ({ checkedList, indeterminate, checkAll, onChangeCheckbox, checkAllChange }) => {

  // const plainOptions = [
  //   { name:'0 Без пересадок', value: 0 },
  //   { name: '1 пересадка', value: 1 },
  //   { name: '2 пересадки', value: 2 },
  //   { name: '3 пересадки', value: 3 }
  // ];

  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </div>
      <Checkbox className={classes.checkboxAll}
                indeterminate={indeterminate}
                onChange={(e) => checkAllChange(e)}
                checked={checkAll}
                defaultValue={['Все']}
      >
        Все
      </Checkbox>
      <Checkbox.Group
        className={classes.checkbox}
        value={checkedList}
        options={plainOptions}
        onChange={(list) => onChangeCheckbox(list)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    checkedList: state.checkedList,
    indeterminate: state.indeterminate,
    checkAll: state.checkAll
  }
}

const mapDispatchToProps = {
    checkAllChange,
    onChangeCheckbox
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Transfer)

