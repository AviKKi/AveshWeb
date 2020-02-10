import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LayoutBody from '../Layout/LayoutBody';
import Typography from '../Typography/Typography';

const styles = theme => ({
  root:
  	{
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4,
    backgroundColor:'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: '10px',
    left: '10%',
    width: '80%',
    margin: 'auto'
	},
  about : {
    fontfamily : "cursive",
    textAlign : "center",
    justify : "center",
    paddingTop : theme.spacing.unit * 5,
    paddingBottom : theme.spacing.unit * 5,
    color : "#FFF",
  },
 });

function About(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" style={{ textShadow:'2px 8px 2px black',letterSpacing:'0.2em',textAlign: 'center', fontFamily: 'Harry', fontSize: '2em', color:'#FFF'}}>
        About Us
      </Typography>

      <Typography variant="body2" marked="center" align="center" className={classes.about} style={{padding: '0px'}}>

      AVESH Chapter-4 is a Techno-management Event of Government Engineering College, Raipur. This event provides a platform to all the engineers of various branches to face a competitive environment of technical as well as management.

      {/* <br />We, in our institution consider education to be divine gift of God and endevour to provide the quality education clubbed with real-time implementations, AVESH3.0 is the doorstep. */}

      </Typography>

    </LayoutBody>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
