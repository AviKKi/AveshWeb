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
import Link from 'next/link'

const styles = theme => ({
  root:
  	{
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 4,
	},
  container : {
    padding : "8vh"
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

function ProductCategories(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2" style={{marginTop:90,fontFamily: 'cursive'}}>
        Our Team
      </Typography>

      <GridContainer
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"

      className={classes.container}
      >
      <GridItem xs={11} md={4} lg={4} align='center'>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../static/team/aniket.JPG"
              />
              <CardContent>
                <Typography variant="button" component="h2" align="center" >
                  <b> <hr style={{width:'70%'}}/>President </b>
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
      </GridItem>

      <GridItem xs={11} md={4} lg={4} align='center'>
       <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../static/team/shweta.JPG"
              />
              <CardContent>
                <Typography variant="button" component="h2" align="center">
                  <b> <hr style={{width:'70%'}}/> Secretary </b>
                </Typography>
              </CardContent>
            </CardActionArea>
       </Card>
      </GridItem>

      </GridContainer>
      <Link href="/AllTeam">
        <Typography variant="button" align="center" component="h2" style={{color:"#424242"}}>
            <Button variant="outlined" color="secondary" style={{padding:10}}><b>More Team...</b></Button>
        </Typography>
      </Link>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
