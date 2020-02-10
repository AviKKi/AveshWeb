import React from "react";
import { connect } from 'react-redux'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "../Header/Header";
import Button from "../Button/Button";
import Link from "next/link"
import navbarsStyle from "./navbarsStyle.jsx";
import Router from 'next/router'
import { logoutUser } from '../../actions/auth'

const CustomListItem = withStyles(navbarsStyle)((props) => {
  const { classes, clickHandler } = props
  const { link, label } = props.payload
  // console.log({clickHandler})
  return (<ListItem className={classes.listItem} >
    <Link href={link}>
      <Button
        className={classes.navLink}
        style={{ padding: '12px 20px' }}
        onClick={
          () => {
            try {
              clickHandler();
              setTimeout(() => Router.push(link), 50);
            } catch (e) { }
          }}
        color="transparent"
        className="{classes.navLink}"
      >
        {label}
      </Button>
    </Link>
  </ListItem>)
})

const navLinks = {
  always: [
    {
      link: '/',
      label: 'Home',
      show: 'always',
    },
    {
      link: '/#Events',
      label: 'Events',
      show: 'always',
    },
    {
      link: '/AllTeam',
      label: 'Team',
      show: 'always',
    },
    {
      link: '/#faq',
      label: 'FAQ',
      show: 'always',
    },
    {
      link: '/#footer',
      label: 'Contact Us',
      show: 'always',
    }
  ],
  unauth: [
    {
      link: '/Register',
      label: 'Register',
      show: 'unauth'
    },
    {
      link: '/LoginPage',
      label: 'Login',
      show: 'unauth'
    },
  ],
  auth: [
    {
      link: "/UserDashboard",
      label: "Dashboard",
    }
  ]
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
  }
}

const RightLinks = (props) => {
  const { classes, clickHandler, isAuthenticated, token, dispatch } = props
  console.log({ RightLinks: clickHandler })
  const alwaysLinks = navLinks.always.map(el => <CustomListItem clickHandler={clickHandler} payload={el} />)
  const unauthLinks = navLinks.unauth.map(el => <CustomListItem clickHandler={clickHandler} payload={el} />)
  const authLinks = navLinks.auth.map(el => <CustomListItem clickHandler={clickHandler} payload={el} />)
  const logout = (<CustomListItem
    payload={{ link: '/', label: 'Logout' }}
    clickHandler={() => {
      dispatch(logoutUser({ token }))
    }}

  />)
  return (
    <List className={classes.list}>
      {alwaysLinks}
      {isAuthenticated ? authLinks : unauthLinks}
      {isAuthenticated ? logout : undefined}
      {/*  <ListItem className={classes.listItem}>
                  <Link href="Schedule">
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                    >
                      Schedule
                    </Button>
                    </Link>
                 </ListItem>


                  <ListItem className={classes.listItem}>
                  <Link href="Register">
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                    >
                      Register
                    </Button>
                    </Link>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                   <Link href="LoginPage">
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                    >
                      Login
                    </Button>
                    </Link>
                  </ListItem>
                */}

    </List>)
}

export const StyledRightLinks = connect(mapStateToProps)(withStyles(navbarsStyle)(RightLinks))


class SectionNavbars extends React.Component {
  render() {
    const { classes, clickHandler } = this.props;
    console.log("SectionNavbars", { clickHandler })
    return (
      <div className={classes.section} >
        <div id="navbar" className={classes.navbar} style={{ position: this.props.st }}>
          <Header
            color="dark"
            leftLinks={
              <Link href="/">
                <a><img src="../static/img/2020/logo2.png" className={classes.logo} /></a>
              </Link>
            }
            style={{ height: '100%', width: 'auto' }}
            rightLinks={
              <StyledRightLinks clickHandler={clickHandler} />
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
