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
import Newspaper from '../components/Newspaper'
import Layout from "../components/Layout/Layout"
//import Events from "../data/Events"
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
        <div className={classes.section} style={{ marginTop:'124px',width: '100%', marginVerticle: "30px" }}>
          <div className={classes.container} >
            <Newspaper.Wrapper style={styles.wrapper}>
              {/* <Newspaper.TopHr /> */}
              <Newspaper.H1 style={styles.heading}><img height="150px" src="../static/img/ribbon_robotics.png" /></Newspaper.H1>
              <div style={styles.mainContent}>
                <Newspaper.H2><u>Maze Runner</u></Newspaper.H2><br />
                <Newspaper.Cursive>
                  Maze runner is an event where you need to use all of your mechanical skills,
                  coding skills and problem solving skills altogether to design a bot which can
                  overcome the obstacles on its way and find a way to the destination by its own
                  using the smartness coded into it by its creaters.
                </Newspaper.Cursive>
              </div>
            </Newspaper.Wrapper>
            <NavPills color="success" tabs={tabs} />
          </div>
        </div>
      </Layout>
    );
  }
}

const styles = {
  wrapper: {
    overflow: 'hidden',
    position: 'relative',
    width: "100%",
  },
  heading: {
    textAlign: "center",
    flex: 5
  },
  mainContent: {
    border: '1px solid black',
    height: "80%",
    width: "98%",
    position: 'absolute',
    top: '180px',
    padding: '10px 30px',
    left: '0',
    marginRight: '10px',
    marginLeft: '10px',
  }
}

export default withStyles(pillsStyle)(SectionPills);
