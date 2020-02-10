import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import { registerUser } from '../actions/auth'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
// @material-ui/icons
import Email from "@material-ui/icons/Email"
import LocationCity from "@material-ui/icons/LocationCity"
import AssessmentRounded from "@material-ui/icons/AssessmentRounded"
import Face from "@material-ui/icons/Face"
import Https from "@material-ui/icons/Https"
import ContactPhone from '@material-ui/icons/ContactPhone'
import Snackbar from "@material-ui/core/Snackbar"
// core components
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import CardHeader from "../components/Card/CardHeader"
import CardFooter from "../components/Card/CardFooter"
import CustomInput from "../components/CustomInput/CustomInput"
import { CustomSelect } from '../components/CustomInput/CustomInput'
import Layout from '../components/Layout/Layout'
import loginPageStyle from "../components/LoginPage/loginPage"
import Typography from '../components/Typography/Typography'

import CollegeList from '../data/Colleges'
/*import image from "./components/img/purple_b.png";*/


const DOMAIN = 'https://api.aveshgecr.in'
const EMAIL_RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password1: "",
      password2: "",
      phone: "",
      phoneError: false,
      college: "Select College",
      collegeError: false,
      emailSpinner: false,
      usernameSpinner: false,
      emailError: false,
      usernameError: false,
      snackbarMessage: "",
      snackbarState: false,
      passwordError: false,
    }
  }
  inputChangeHandler = (key, e) => {
    // console.log(key, e)
    if (key === "phone" && e.target.value.length > 10)
      return
    this.setState({ [key]: e.target.value })
  }
  validation = () => {
    // Form Validation
    const { username, password1, password2, phone, college, email } = this.state;
    if (username === "" || password1 === "" || password2 === "" || phone === "" || email === "") {
      this.setState({ snackbarMessage: "All fields are required", snackbarState: true })
      return false
    }
    else if (college === "Select College") {
      this.setState({ snackbarMessage: "Select a college", snackbarState: true, collegeError: true })
      return false
    }
    else if (! /^[6-9][0-9]{9}$/.test(this.state.phone)) {
      this.setState({ phoneError: true, snackbarMessage: "Enter 10 digit phone number.", snackbarState: true })
      return false
    }
    else if (!EMAIL_RE.test(this.state.email)) {
      this.setState({ emailError: true, snackbarMessage: "Enter email address correctly.", snackbarState: true })
      return false
    }
    else if (this.state.password1 !== this.state.password2) {
      this.setState({ passwordError: true, snackbarMessage: "Passwords do not match.", snackbarState: true })
      return false
    }
    else {
      this.setState({ passwordError: false })
    }

    return true;
  }
  submitHandler = () => {
    if (!this.validation()) { return; }
    const payload = {
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2,
      email: this.state.email,
      mobile: this.state.phone,
      college: this.state.college,
    }
    this.props.dispatch(registerUser(payload))

  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
  }

  uniqueValidator = async (key, e) => {
    if (key === "username") {
      this.setState({ usernameSpinner: true })
      const res = await axios.get(DOMAIN + "/users/username_validator", { params: { username: this.state.username } })
      if (res.data.found) {
        this.setState({ usernameError: true, snackbarState: true, snackbarMessage: "Username already taken." })
      }
      else {
        this.setState({ usernameError: false })
      }
      this.setState({ usernameSpinner: false })
    }
    if (key === "email") {
      this.setState({ emailSpinner: true })
      const res = await axios.get(DOMAIN + "/users/email_validator", { params: { email: this.state.email } })
      if (res.data.found) {
        this.setState({ emailError: true,snackbarState: true, snackbarMessage: "Email already used." })
      }
      else {
        this.setState({ emailError: false })
      }
      this.setState({ emailSpinner: false })
    }
  }
  handleSelect = (e) => {
    this.setState({ college: e.target.value })
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <Layout st="static">
        <Snackbar
          message={this.state.snackbarMessage}
          open={this.state.snackbarState}
          ClickAwayListenerProps={{ mouseEvent: false }}
          autoHideDuration={2500}
          onClose={() => this.setState({ snackbarState: false })}
        />
        <div style={{
          backgroundImage: "url('../static/img/login1.jpg')",
          backgroundSize: 'cover',
          width: '100%',
        }}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={11} sm={10} md={6} lg={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader className={classes.cardHeader}>
                      <Typography variant="button" style={{ color: '#FFFFFF' }}>
                        Register
                      </Typography>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="Username..."
                        id="username"
                        error={this.state.usernameError}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onBlur: this.uniqueValidator.bind(this, "username"),
                          spinner: this.state.usernameSpinner,
                          onChange: this.inputChangeHandler.bind(this, "username"),
                          value: this.state.username,
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />

                      <CustomSelect
                        options={CollegeList}
                        labelText="College..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          error: this.state.collegeError,
                          onChange: this.handleSelect,
                          value: this.state.college,
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LocationCity className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        error={this.state.emailError}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onBlur: this.uniqueValidator.bind(this, "email"),
                          spinner: this.state.emailSpinner,
                          value: this.state.email,
                          onChange: this.inputChangeHandler.bind(this, "email"),
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Phone Number..."
                        id="phone"
                        error={this.state.phoneError}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.phone,
                          onChange: this.inputChangeHandler.bind(this, "phone"),
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <ContactPhone className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password..."
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        error={this.state.passwordError}
                        inputProps={{
                          value: this.state.password1,
                          onChange: this.inputChangeHandler.bind(this, "password1"),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Https className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Confirm Password..."
                        id="pass"
                        error={this.state.passwordError}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.password2,
                          onChange: this.inputChangeHandler.bind(this, "password2"),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Https className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.submitHandler} simple>
                        <Typography variant="button" gutterBottom style={{ color: '#424242' }}>
                          Submit
                        </Typography>
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/*<Footer whiteFont />*/}
        </div>
      </Layout>
    );
  }
}

export default connect()(withStyles(loginPageStyle)(LoginPage));
