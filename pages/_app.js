import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/getPageContext'
import { Provider } from 'react-redux'
import withReduxStore from '../src/with-redux-store'
import TopLoader from '../components/Common/TopLoader'
import Router from 'next/router'
import {
  SHOW_TOPLOADER,
  HIDE_TOPLOADER
} from '../actions/actionTypes'

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount(){
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`)
      console.log(this.props.reduxStore.dispatch({type: SHOW_TOPLOADER}))
    })
    Router.events.on('routeChangeComplete', () => this.props.reduxStore.dispatch({type: HIDE_TOPLOADER}))
    Router.events.on('routeChangeError', () => this.props.reduxStore.dispatch({type: HIDE_TOPLOADER}))

  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
        <Head>
          <title>Avesh: Chapter 4</title>
          <link rel="stylesheet" type="text/css" href="static/css/parent.css"/>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp)
