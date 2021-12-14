import React from 'react'
import classes from "./Navigation.module.scss"
import 'antd/dist/antd.css'
import { Tabs } from 'antd'
import {VisibilityFilters} from '../../actions/actions'
import { connect } from 'react-redux'
import compose from '../../Utilities/compose'
import {changeFilter} from '../../actions/actions'


const { TabPane } = Tabs

const Navigation = ({ changeFilter }) => {

  return (
    <Tabs className={classes.container} type="card"  onChange={(filter) => changeFilter(filter)}>
      <TabPane className={classes.tab}
               tab="САМЫЙ ДЕШЕВЫЙ"
               key={VisibilityFilters.showCheaper}
               size={"250px"}
      >
      </TabPane>
      <TabPane className={classes.tab}
               tab="САМЫЙ БЫСТРЫЙ"
               key={VisibilityFilters.showFaster}
      >
      </TabPane>
    </Tabs>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  changeFilter
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navigation)

