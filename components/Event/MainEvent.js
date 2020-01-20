import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { createMuiTheme } from '@material-ui/core/styles';

import Typography from '../Typography/Typography';
import MainEventStyle from './MainEventStyle';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  downloadPdf = ()=>{
      window.open(this.props.event.pdfLink)
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, event } = this.props;
    const cardStyle = {
      backgroundImage: `url("${event.background}")`,
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      overflow: "auto"
}

    //console.log(event.coordinators)

    return (
      <div style={{height:"100%"}} className={classes.root}>

          <Grid container style={{height:"100%"}} spacing={0}
            direction="column"
            alignItems="center"
            justify="center">

            <Grid item xs={12} md={12} lg={12}>
            <Card style={cardStyle} className={classes.card}>
              <CardContent className={classes.cardContent}>
              <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center">
                <Grid item xs={12} sm={12} lg={12}>
                    <img src={event.logo} className={classes.media}/>
                </Grid>
              </Grid>

              <Typography variant="h4" marked="center" align="center" component="h2" className={classes.eventTitle}>
                {event.title}
              </Typography>

                  <hr className={classes.hr}/>

                <Typography variant="h6" className={classes.description}>

                {event.description}

                </Typography>
                <hr className={classes.hr}/>

                  <Typography variant="h4" align="center">
                           <Button onClick={this.downloadPdf} variant="outlined" color="secondary" className={classes.pdf}>
                              <b> Download PDF </b>
                           </Button>
                    </Typography>

                <Typography variant="h4" align="center">
                           <Button className={classes.contact}>
                             <span>
                                {
                                event.coordinators?
                                    event.coordinators.map(coordinator=><>{coordinator}<br/></>)
                                    :<></>
                                }
                             </span>
                           </Button>
                  </Typography>

              </CardContent>

                </Card> {/*closing Card*/}

            </Grid> {/*closing GridItem*/}
        </Grid>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(MainEventStyle, { withTheme: true })(FullWidthTabs);
