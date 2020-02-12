import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";


const styles = theme => ({
  root: {
    opacity: '0.9',
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 0,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    backgroundColor:"rgba(66,66,66)",
    borderRadius:0,
    // width:'100%',
  },
   socialIcons: {
    width: "28px",
    marginTop: 16,
    margin: 10,
    transform: "none",
    left: "0",
    top: "0",
    height: 28,
  },
  craft:
  {
    backgroundColor:"#212121",
    width:'100%',
    padding:0,
    borderRadius:0,
    paddingBottom: theme.spacing.unit * 0.5,
  },
  footer:{
    position: "absolute",
    bottom: '0',
    width: "100%",
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div id="footer" className={classes.footer} style={{position:props.st}}>
      <Paper className={classes.root} elevation={1}>
      <Grid container
      spacing={0}
      direction="column"
      justify="center"
      alignItems="center"
      >
      <Grid item xs={10} lg={6}>
        <Typography variant="button" gutterBottom align="center" style={{color:"#f1f8e9",fontSize:14}}>
         <strong> Follow us on </strong>
         <br/>
                  <a href="https://www.facebook.com/aveshngecr"><img src="../static/img/fb.png" className={classes.socialIcons}/></a>
                  <a href="https://www.instagram.com/aveshgecr/"><img src="../static/img/insta.png"  className={classes.socialIcons}/></a>
                  <a href="https://www.youtube.com/channel/UCGVK_ynjVO-E0fZtWHUIVDg/"><img src="../static/img/yt.png"  className={classes.socialIcons}/></a>
                  <a href="https://twitter.com/aveshgecr"><img src="../static/img/twitter.png"  className={classes.socialIcons}/></a>
                {/*  <img src="../static/img/google.png"  className={classes.socialIcons}/>
                  <img src="../static/img/yt.png"  className={classes.socialIcons}/>
                  <img src="../static/img/marker.png"  className={classes.socialIcons}/>
              */}
        </Typography>
        </Grid>
        <hr style={{width:"200px"}}/>
        <Grid item xs={10} lg={4}>
        <Typography variant="button" gutterBottom align="center" style={{color:"#f1f8e9",paddingTop:"30px",fontSize:14,marginTop:"0px", padding:'0px'}}>
         <b> Contact us on </b>
         </Typography>
                   <Typography variant="body2" gutterBottom align="center" style={{color:"#f1f8e9",fontSize:14}}>
                      Rishabh Singh : 8517817641 <br />
                      Devesh Joshi : 7974451799 <br />
                      Akarshit Shrivastav : 9131054396  <br/>
                      Satyam Lachhwani : 9770977224<br /><br/> 
                      Website Admin : 7247489270
                    </Typography>
                   {/* <img src="../static/img/google.png"  className={classes.socialIcons}/>
                    <img src="../static/img/yt.png"  className={classes.socialIcons}/>
                    <img src="../static/img/marker.png"  className={classes.socialIcons}/>
                */}
          </Grid>
        </Grid>
         {/* <br/> */}
         <hr style={{width:"100px"}}/>

                 <Typography variant="subtitle2" gutterBottom align="center" style={{paddingTop:"30px",color:"#f1f8e9",fontSize:14}}>

                            Government Engineering College, Sejbahar, Raipur (C.G.)
                            <br/>
                            Email : aveshaayam2k20@gmail.com

                </Typography>

      </Paper>
      <Paper className={classes.craft}>
        <Typography variant="subtitle2" gutterBottom align="center" style={{color:"#f1f8e9",fontSize:14}}>
        <b>CRAFTED WITH <span style={{position:'relative', top:'8px'}}><Favorite style={{color:"#f00",position:'relative',paddingTop: 0,}}/></span> BY AVESH WEB TEAM 2020 </b>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
