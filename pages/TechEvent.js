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

import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
//import Events from "../data/Events"
import { Technical } from "../data/Events"

class SectionPills extends React.Component {
  render() {
    const headEvents = Technical
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
    return (<>
      <Navbar st='static' />
      <div className={classes.section} style={{width:'100%'}}>
        <div className={classes.container}>
                <NavPills
                  color="success"
                  tabs={tabs}
                />
        </div>
      </div>
      <Footer /></>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
