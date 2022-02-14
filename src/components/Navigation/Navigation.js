import React from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import classes from "./Navigation.module.scss"
import {VisibilityFilters, changeFilter} from '../../actions/actions'
import compose from '../../Utilities/compose'


const { TabPane } = Tabs

// eslint-disable-next-line no-shadow
const Navigation = ({ changeFilter }) => (
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

const mapStateToProps = (state) => ({
    filter: state.filter
  })

const mapDispatchToProps = {
  changeFilter
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navigation)

