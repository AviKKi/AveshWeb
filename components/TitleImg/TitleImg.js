import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Typography from '../Typography/Typography';

const styles = theme => ({
  background: {
    backgroundImage:'url(../static/img/gec4a.jpg)',
    backgroundColor: '#424242', // Average color of the background image.
    backgroundAttachment:'fixed',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    height:600,
    [theme.breakpoints.up('md')]:{
        paddingRight:250,
        paddingTop:320,
    },
    [theme.breakpoints.down('md')]:{
        paddingTop:350,
    },

    fontSize:'5em',
    zIndex:0,
    width:'100%',
  },
  title : {
      marginTop:"40px",
      //height:"100px",
      //width:"400px",
      [theme.breakpoints.up('lg')]:{
          marginLeft : "150px"
      },
      [theme.breakpoints.down('md')]:{
          width:"310px",
      },
      [theme.breakpoints.down('xs')]:{
          width:"250px",
      },
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (

          <div style={
            {
              overflow:"hidden"
            }
          }>

            <div className={classes.background}>
                <Grid container
                spacing={0}
                justify="center"
                direction="column"
                alignItems="center">
                        <Grid style={{overflow:"hidden"}} item lg={7} xs={12}>
                          <img src='../static/img/title.png' className={classes.title}/>
                        </Grid>
                </Grid>
            </div>
          </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
