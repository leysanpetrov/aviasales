import React from "react";
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import classes from "./Transfer.module.scss";
import compose from '../../Utilities/compose';
import { checkAllChange, onChangeCheckbox } from "../../actions/actions";



// eslint-disable-next-line no-shadow
const Transfer = ({ checkedList, indeterminate, checkAll, onChangeCheckbox, checkAllChange}) => {

  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </div>
      <Checkbox className={classes.checkboxAll}
                indeterminate={indeterminate}
                onChange={(ev) => checkAllChange(ev)}
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

const mapStateToProps = (state) => ({
    checkedList: state.checkedList,
    indeterminate: state.indeterminate,
    checkAll: state.checkAll
  })

const mapDispatchToProps = {
    checkAllChange,
    onChangeCheckbox
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Transfer)

