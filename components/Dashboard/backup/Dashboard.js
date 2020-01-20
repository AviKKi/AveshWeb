import React from "react";
import {connect} from 'react-redux'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from '@material-ui/core/withWidth';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../NavPills/NavPills";
import pillsStyle from "../NavPills/pillsStyle.jsx";
import TotalEvent from "../Dashboard/TotalEvent";
import Layout from "../Layout/Layout";
import Profile from './Profile'
import PaymentOptions from './PaymentOptions'

class SectionPills extends React.Component {
  render() {
    const { classes, profile, token } = this.props
    const orientation = this.props.width==="xs"?undefined:{
                    tabsGrid: { xs: 5, sm: 3, md: 2 },
                    contentGrid: { xs: 12, sm: 9, md: 10 }
                  }
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div style={{overflow:"hidden"}} id="navigation-pills">

            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  horizontal={orientation}
                  tabs={[
                    {
                      tabButton: "Profile",
                      tabIcon: Dashboard,
                      tabContent: (
                          <Profile profile={profile} username={profile.username}/>
                      )
                    },
                    {
                      tabButton: "Passes and Accomodation",
                      tabIcon: Dashboard,
                      tabContent: (
                          <PaymentOptions profile={profile} token={token} username={profile.username}/>
                      )
                    },
                    {
                      tabButton: "Schedule",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                            Will be updated soon.
                            <TotalEvent />
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=>{
    return {
        profile: state.auth.profile,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(withWidth()(withStyles(pillsStyle)(SectionPills)));
