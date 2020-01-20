import React from "react";
import {connect} from 'react-redux'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from '@material-ui/core/withWidth';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../NavPills/NavPills";
import pillsStyle from "../NavPills/pillsStyle.jsx";
import Layout from "../Layout/Layout";
import Profile from './Profile'
import PaymentOptions from './PaymentOptions'
import Accomodation from './Accomodation'
import Participate from './Participate'

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
        {profile!==undefined?(<div style={{overflow:"hidden"}} id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  tabs={[
                    {
                      tabButton: "Participate",
                      tabIcon: Dashboard,
                      tabContent: (
                          <Participate
                            token={token} />
                      )
                    },
                    {
                      tabButton: "Passes",
                      tabIcon: Dashboard,
                      tabContent: (
                          <PaymentOptions profile={profile} token={token} username={profile.username}/>
                      )
                    },
                    {
                      tabButton: "Accomodation",
                      tabIcon: Dashboard,
                      tabContent: (
                          <Accomodation profile={profile} token={token} username={profile.username}/>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>):<></>}
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
