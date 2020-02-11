import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import LayoutBody from '../Layout/LayoutBody';
import Typography from '../Typography/Typography';
import Link from 'next/link';

const styles = theme => ({
  root:
  	{
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4,
	},
  container : {
    padding : "5vh",
    [theme.breakpoints.down('sm')]:{
      padding: '4vh 1vh'
    }
  },
  card: {
    marginTop:"2.5vh",
    padding: theme.spacing.unit * 2,
    width : 216,
    
    // [theme.breakpoints.down("sm")]: {
    //   width:214,
    // }, 
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      // height: 100,
    },
    //  [theme.breakpoints.up('md')]: {
    //   height: 230,
    // },
    //  [theme.breakpoints.up('lg')]: {
    //   height: 280,
    // },
    height: "100%",
    borderRadius:10,
    // borderShadow:0 2 0 10 'red'  
  },
  media: {
    width : 122,
    height: 120,
    borderRadius:'50%',
  },
 });

function ProductCategories(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h1" marked="center" align="center" component="h2" style={{textShadow:'2px 8px 2px black',fontSize:'4em',marginTop:60,fontFamily: 'Harry',color:'white'}}>
        Our Team
      </Typography>

      <GridContainer
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      classes={{label: 'MuiGrid-container-288'}}
      className={classes.container}
      >
      <GridItem xs={11} md={4} lg={4} align='center'>
          <Card className={classes.card} id = "cardanim">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../static/team/aksir.jpg"
              />
              <CardContent>
                <Link href="">
                    <Typography variant="button" component="h2" align="center" >
                      <b className={classes.names}> <hr style={{width:'70%'}}/>Akarshit Shrivastav </b>
                      <b className={classes.names}> <hr style={{width:'70%'}}/>President </b>
                    </Typography>
                </Link>
              </CardContent>
            </CardActionArea>
            </Card>
      </GridItem>

      <GridItem xs={11} md={4} lg={4} align='center'>
       <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../static/team/rishabh.jpg"
              />
              <CardContent>
              <Link href="">
                    <Typography variant="button" component="h2" align="center">
                      <b className={classes.names}> <hr style={{width:'70%'}}/>Rishabh Singh </b>
                      <b className={classes.names}> <hr style={{width:'70%'}}/> Fest-Coordinator </b>
                    </Typography>
              </Link>
              </CardContent>
            </CardActionArea>
       </Card>
      </GridItem>

      <GridItem xs={11} md={4} lg={4} align='center'>
       <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../static/team/devesh.jpg"
              />
              <CardContent>
              <Link href="">
                    <Typography variant="button" component="h2" align="center">
                    <b className={classes.names}> <hr style={{width:'70%'}}/>Devesh Joshi </b>
                    <b className={classes.names}> <hr style={{width:'70%'}}/>Fest-Coordinator</b>
                    </Typography>
              </Link>
              </CardContent>
            </CardActionArea>
       </Card>
      </GridItem>

      </GridContainer>
      {/* <Link href="/AllTeam">
        <Typography variant="button" align="center" component="h2" style={{color:"#424242"}}>
            <Button variant="outlined" color="secondary" style={{padding:10}}><b>More</b></Button>
        </Typography>
      </Link> */}
      <style jsx>{`
      #cardanim{
        background:red;
      }
      `}</style>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
