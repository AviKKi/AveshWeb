import React from "react"
import { connect } from "react-redux"
import { loginUser } from "../actions/auth"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
import Icon from "@material-ui/core/Icon"
import Avatar from "@material-ui/core/Avatar"
// @material-ui/icons
import Face from "@material-ui/icons/Face"
import Https from "@material-ui/icons/Https"
// core components
import Typography from '../components/Typography/Typography'

import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"

import Button from "../components/Button/Button"

import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import CardHeader from "../components/Card/CardHeader"
import CardFooter from "../components/Card/CardFooter"

import CustomInput from "../components/CustomInput/CustomInput"
import Layout from '../components/Layout/Layout'
import loginPageStyle from "../components/LoginPage/loginPage"
import Snackbar from '@material-ui/core/Snackbar';

//import image from "../static/img/purple_b.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password: "",
      error: false,
    };
  }
  inputChangeHandler = (key,e)=>{
      this.setState({
          [key]: e.target.value 
      })
  }
  errorHandler = (msg)=>{
      this.setState({error:true})
      console.log(msg)
  }
  submitHandler = ()=>{
      const {username,password} = this.state
      this.props.dispatch( loginUser(
            {
                username: username,
                password: password,
                errorHandler: this.errorHandler
            }))
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props
    return (
        <Layout st="static">
        <div style={{
            backgroundImage: "url('../static/img/bg/bricks.jpg')",
            backgroundSize: 'cover',
            width:'100%',
          }}>
            <div 
            // style={{width:'80%',margin:'auto'}}
            className='platformImg'
            >
              <img src="../static/img/bg/platform.png" width="100%" style={{opacity:0.8}}/>
            </div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={11} sm={10} md={6} lg={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader className={classes.cardHeader}>
                      <Typography variant="button" style={{color:'#FFFFFF'}}>
                        Login
                      </Typography>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="Username..."
                        id="username"
                        formControlProps={{
                            error: this.state.error,
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange:this.inputChangeHandler.bind(this, "username"),
                          value:this.state.username,
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password..."
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                          error: this.state.error
                        }}
                        inputProps={{
                          onChange:this.inputChangeHandler.bind(this, "password"),
                          value:this.state.password,
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
                        <Typography variant="button" style={{color:'#424242'}}>
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
        <style>{`
          .platformImg{
            width:25%;
            margin:auto;
          }
          @media (max-width:984px){
            .platformImg{
              width:40%;
            }
          }
          @media (max-width:768px){
            .platformImg{
              width:60%;
            }
          }
          @media (max-width:568px){
            .platformImg{
              width:80%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}


const mapStateToProps = state=> {
  return {
    topLoading: state.common.topLoading,
    isAuthenticated: state.auth.isAuthenticated
  }

}
const styledLoginPage = withStyles(loginPageStyle)(LoginPage)
export default connect(mapStateToProps)(styledLoginPage)
