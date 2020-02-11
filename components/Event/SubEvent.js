import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import Close from '@material-ui/icons/Close'

import ResponsiveDrawer from './customDrawer'
import MainEvent from './MainEvent';
import Newspaper from '../Newspaper';

const images = [
  {
    url:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Front-End',
  },
  {
    url:
      'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'CodeKnack',
  },
];


const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '28vh',
    width: '100% !important',
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function DetailsDrawer(props) {
  const { event } = props
  return (
    <ResponsiveDrawer transitionDuration={500} open={props.open}>
      <div
        style={{
          padding: "10px",
          position: 'absolute',
          zIndex: '200'
        }}>
        <Fab
          size="small"
          color="secondary"
          onClick={props.closeHandler}
          style={{ padding: 0 }}>
          <Close style={{ color: "#FFFFFF" }} />
        </Fab>
      </div>
      {props.children}
      <MainEvent event={event} />
    </ResponsiveDrawer>
  )
}



class Events extends React.Component {
  state = {
    detailsOpen: false,
    drawerContent: {},
  }
  toggleDetails = (e) => {
    if (this.state.drawerOpen) {
      this.setState({ detailsOpen: !this.state.detailsOpen })
    } else {
      this.setState({ detailsOpen: !this.state.detailsOpen, drawerContent: e })
    }

  }
  render() {
    const { classes, subEvents } = this.props;
    return (
      <>
        <DetailsDrawer
          event={this.state.drawerContent}
          closeHandler={this.toggleDetails}
          open={this.state.detailsOpen} />

        <div className={classes.images}>
          <Newspaper
            onClick={this.toggleDetails}
            ribbon={subEvents.ribbon}
            articles={subEvents["mainEvents"]} />
        </div>
      </>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);
