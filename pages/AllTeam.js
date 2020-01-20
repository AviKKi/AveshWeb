import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import LayoutBody from '../components/Layout/LayoutBody';
import Layout from '../components/Layout/Layout';
import Typography from '../components/Typography/Typography';

const styles = theme => ({
  root:
  	{
    marginTop: theme.spacing.unit * 0,
    marginBottom: theme.spacing.unit * 0,
	},
  container : {
    padding : "5vh"
  },
  card: {
    marginTop:"2.5vh",
    padding: theme.spacing.unit * 2,
    width : 216,
    [theme.breakpoints.down("sm")]: {
      width:214,
    },
    height: "100%",
    borderRadius:3,
  },
  media: {
    width : 182,
    height: 180,
    borderRadius:'50%',
  },
 });

 const teams = [
    /*{
      title : 'Management',
      detail : [
      {
        name : "Akanchha Sahu",
        pic : "../static/team/akanchha.jpg"
      },
      ]
  },*/

    {
      title : 'Website',
      detail : [
      {
        name : "Atul Yadav(AviKKi)",
        pic : "../static/team/github.png"
      },
      {
        name : "Diksha Verma",
        pic : "../static/team/diksha.jpg"
      },
      {
        name : "Gilbeesh Kosma",
        pic : "../static/team/github2.png"
      },
      ]
    },

    {
      title : 'Graphics',
      detail : [
      {
        name : "Ashutosh Netam",
        pic : "../static/team/ashu.jpeg"
      },
      {
        name : "Bhavesh",
        pic : "../static/team/bhavesh.jpg"
      },
      {
        name : "Nishita Toshi",
        pic : "../static/team/nishita.jpg"
      },
      ]
    },

     {
      title : 'Promotion',
      detail : [
      {
        name : "Ayushi Mourya",
        pic : "../static/team/ayushi.jpg"
      },
      {
        name : "Salomi Toppo",
        pic : "../static/team/salomi.jpg"
      },
      ]
    },
  ];

function ProductCategories(props) {
  const { classes } = props;

  return (
    <>
    <Layout>
     {teams.map(team => (
    <LayoutBody className={classes.root} component="section" width="large">

      <Typography variant="h4" marked="center" align="center" component="h2" style={{marginTop:50,fontFamily: 'cursive'}}>
        {team.title} Team
      </Typography>

      <GridContainer
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"

      className={classes.container}
      >
      {team["detail"].map(t => (
      <GridItem xs={11} md={4} lg={4} align='center'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={t.pic}
              />
              <CardContent>
                <Typography variant="button" component="h2" align="center" >
                  <b> <hr style={{width:'70%'}}/>{t.name}</b>
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
      </GridItem>
      ))}

      </GridContainer>


    </LayoutBody>
    ))}
    </Layout>
     </>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
