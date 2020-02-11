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
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
    return (<>
      <Navbar st='static' />
      <div className={classes.section} style={{width:'full'}}>
        <div className={classes.container} className='responsiveWindow'>
                <NavPills
                  color="success"
                  tabs={tabs}
                />
        </div>
      </div>
      <Footer st="static"/>
      
      <style>
          {`
            .responsiveWindow{
              width:75%;
              padding-left:0;
              padding-right:0;
              margin:auto;
            }
            @media (max-width:768px){
              .responsiveWindow{
                width:80%;
              }
            }
            @media (max-width:576px){
              .responsiveWindow{
                width:98%;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
