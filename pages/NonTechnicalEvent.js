import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import NavPills from "../components/NavPills/NavPills";
import pillsStyle from "../components/NavPills/pillsStyle.jsx";
import SubEvent from "../components/Event/SubEvent";

import Layout from "../components/Layout/Layout"
//import Events from "../data/Events"
import { NonTechnical } from "../data/Events"

class SectionPills extends React.Component {
  render() {
    const headEvents = NonTechnical
    const { classes } = this.props
        const tabs = headEvents.map( val=>{
      return {
        tabButton: val.tabButton,
        tabIcon: val.tabIcon,
        tabContent: (
          <span>
            <SubEvent subEvents={val} />
          </span>
        )
      }
    } )
    return (
      <Layout>
      <div className={classes.section} style={{width:'full'}}>
        <div className={classes.container}>
                <NavPills
                  color="success"
                  tabs={tabs}
                />
        </div>
      </div>
      </Layout>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
