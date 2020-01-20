import PaymentOptions from './PaymentOptions'

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
  card: {
    padding:'0px',
    display : "flex",
    maxWidth: 400,
    [theme.breakpoints.up('lg')]:{height: 200},
    [theme.breakpoints.down('sm')]:{height: 200},
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 200
  },
  cover: {
    width: 300,
    height: 200,
    [theme.breakpoints.down('md')]:{width:340,height: 220},
    [theme.breakpoints.down('sm')]:{width:300,height: 150},
  },
});

function ProfileCard(props) {
  const { classes, theme } = props;

  return (
    <Grid container
    spacing={0}
    justify="center"
    direction="column"
    alignItems ="center"
    >
    <Grid item xs={12} lg={5}>
    <Card className={classes.card}>
        <CardMedia
            className={classes.cover}
            image={`https://api.aveshgecr.in/static/qrimages/${props.username}.png`}
            title="Live from space album cover"
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.username}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            .....
          </Typography>
        </CardContent>
        </div>
    </Card>
    </Grid>
    </Grid>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProfileCard);
