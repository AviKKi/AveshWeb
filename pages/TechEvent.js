import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import NavPills from "../components/NavPills/NavPills";
import pillsStyle from "../components/NavPills/pillsStyle.jsx";
import SubEvent from "../components/Event/SubEvent";
import Layout from "../components/Layout/Layout"
import { Technical } from "../data/Events"

class SectionPills extends React.Component {
  render() {
    const headEvents = Technical
    const { classes } = this.props
    const tabs = headEvents.map(val => {
      return {
        tabButton: val.tabButton,
        tabIcon: val.tabIcon,
        tabContent: (
          <span>
            <SubEvent subEvents={val} />
          </span>
        )
      }
    })
    return (
      <Layout>
        <div className={classes.section} style={{ marginTop: '124px', width: '100%', marginVerticle: "30px" }}>
          <div className={classes.container} className='responsiveWindow'>
            <NavPills color="success" tabs={tabs} />
          </div>
        </div>
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
      </Layout>
    );
  }
}

const styles = {

}

export default withStyles(pillsStyle)(SectionPills);
