import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Head from 'next/head'
import Events from '../components/Event/Events';
import TitleImg from '../components/TitleImg/TitleImg';
import Layout,{ withLayout } from '../components/Layout/Layout';
import Team from '../components/Home/Team';
import About from '../components/Home/About';
import FabIntegrationSnackbar from './type'

import Navbar from '../components/Navbar/Navbar';
import MainImg from '../components/MainImg/MainImg';
import Calender from '../components/Calendar/Calendar';
import ReactFullpage from '@fullpage/react-fullpage';

const styles = theme => ({
  root:
  	{
    backgroundImage:'url(../static/img/main.jpg)',
    backgroundColor: '#424242', // Average color of the background image.
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
	},
  })

  const styles1 = {
    backgroundImage:'url(http://getwallpapers.com/wallpaper/full/b/0/6/263616.jpg)',
    backgroundSize:'cover'
  };
  const styles2 = {
    backgroundImage:'url(https://images.unsplash.com/photo-1547756536-cde3673fa2e5)',
    backgroundSize:'cover'
  };
  const styles3 = {
    backgroundImage:'url(https://images.unsplash.com/photo-1551269901-5c5e14c25df7)',
    backgroundSize:'cover',
    opacity:'0.5'
  };
  



class App extends React.Component {
  render() {

    const { classes } = this.props;

    return(
      <>
        <Head>
          <link rel='stylesheet/css' src='../static/css/styles.css' />
        </Head>
        <ReactFullpage
          //fullpage options
          scrollingSpeed = {1000}
          navigation={true}
          autoScrolling={true}
          controlArrows= {false}
          slidesNavigation={true}
          // navigationTooltips= {['Home','About Us','Contacts']} /* Options here */

          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Navbar />
                <div className="section" style={styles1}>
                  <MainImg />
                </div>
                <div className="section" style={styles2}>
                  <Calender />
                </div>
                <div className="section" style={styles3}>
                  <Events/>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        </>
      )
    }
}


          
{/* <Layout>
<Head>
  <link rel="stylesheet" href="static/css/styles.css" />
</Head>
<MainImg />
<Calender /> */}
{/* <FabIntegrationSnackbar message="Registrations Starting Soon." /> */}
{/* <TitleImg/> */}
{/* <Events  />
<Team />
<About />
</Layout> */}

export default withStyles(styles)(App)
