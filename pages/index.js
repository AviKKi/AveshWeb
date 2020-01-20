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

const styles = theme => ({
  root:
  	{
    backgroundImage:'url(../static/img/main.jpg)',
    backgroundColor: '#424242', // Average color of the background image.
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
	},
  })

class App extends React.Component {
  render() {

    const { classes } = this.props;

    return(
            <Layout>
              <Head>
                <link rel='stylesheet/css' src='/static/css/font.css' />
              </Head>
              {/*<FabIntegrationSnackbar message="Registrations Starting Soon." />*/}
              <TitleImg/>
              <Events  />
              <Team />
              <About />
            </Layout>
      )
    }
}


export default withStyles(styles)(App)
