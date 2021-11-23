import React from 'react'
import classes from "./Navigation.module.scss"
import 'antd/dist/antd.css'
import { Tabs } from 'antd'


const { TabPane } = Tabs

const Navigation = () => {

  return (
    <Tabs className={classes.container} type="card">
      <TabPane className={classes.tab} tab="САМЫЙ ДЕШЕВЫЙ" key="1" size={"250px"}>
      </TabPane>
      <TabPane className={classes.tab} tab="САМЫЙ БЫСТРЫЙ" key="2">
      </TabPane>
    </Tabs>
  )
}

export default Navigation

// <Tabs clasName={classes.container} activeKey defaultActiveKey="1" type="card" >
//   <TabPane style={{ backgroundColor: "red" }}
// clasName={classes.isActiveTab}
// tab="САМЫЙ ДЕШЕВЫЙ"
// key="1">
//   </TabPane>
// <TabPane tab="САМЫЙ БЫСТРЫЙ"
//          key="2">
// </TabPane>
// </Tabs>
