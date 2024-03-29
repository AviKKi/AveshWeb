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
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';
import Video from '../components/Video/Video';

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
    backgroundImage:'url(../static/img/bg/building.jpg)',
    backgroundSize:'cover',
    backgroundPosition: 'center'
  };
  const styles2 = {
    backgroundImage:'url(../static/img/bg/train.jpeg)',
    backgroundSize:'cover'
  };
  const styles3 = {
    backgroundImage:'url(../static/img/bg/events.jpg)',
    backgroundSize:'cover',
    // backgroundPosition: 'center'
    // opacity:'0.5'
  };
  const styles4 = {
    backgroundImage:'url(../static/img/bg/book.jpg)',
    backgroundSize:'cover',
    // opacity:'0.5'
  };
  const styles5 = {
    backgroundImage:'url(../static/img/bg/contacts.jfif)',
    backgroundSize:'100% auto',
    backgroundRepeat: 'repeat',
    backgroundColor: (0,0,0)
    // opacity:'0.5'
  };
  const styles6 = {
    backgroundImage:'url(../static/img/bg/deathly.jpg)',
    backgroundSize:'cover',
    backgroundPosition: 'center'
  };
  



class App extends React.Component {
  render() {

    const { classes } = this.props;

    return(
      <>
        <Head>
          <link rel='stylesheet' src='../static/css/styles.css' />
          <title>Avesh: Chapter 4</title>
        </Head>
        <ReactFullpage
          //fullpage options
          scrollingSpeed = {500}
          // navigation={true}
          autoScrolling={true}
          controlArrows= {false}
          slidesNavigation={true}
          // navigationTooltips= {['Home','About Us','Contacts']} /* Options here */

          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Navbar st='absolute'/>
                <div className="section" style={styles1} data-anchor="">
                  <MainImg />
                </div>
                <div className="section" style={styles2} data-anchor="Calender">
                  <Calender />
                </div>
                <div className="section" style={styles3} data-anchor="Events">
                  <Events/>
                </div>
                <div className="section" style={styles6} data-anchor="Video">
                  <Video />
                </div>
                <div className="section" style={styles4} data-anchor="Faq">
                  <Faq/>
                </div>
                <div className="section" style={styles5} data-anchor="Footer">
                  {/* <About /> */}
                  <h2 style={{ textShadow:'2px 8px 2px black',letterSpacing:'0.1em',textAlign: 'center', fontFamily: 'Harry', fontSize: '4em', color:'#FFF', position:'absolute', width:'100%',top:'20px'}}>Contact Us</h2>
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <style>

          {`
            .fp-tableCell{
              background-color:rgba(0,0,0,0.3);
            }
          `}
        </style>
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

export default withStyles(styles)(App);
