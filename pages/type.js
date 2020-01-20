import React from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

import Button from '@material-ui/core/Button';

//import Typography from '../Typography/Typography';

"@import url('https://fonts.googleapis.com/css?family=Baloo+Thambi')"

{/*const styles = theme => ({

body : {
  backgroundColor: '#000',
  color: '#111',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: " 'Baloo Thambi', cursive",
  fontSize: '7vh',
  height: '100vh',
},

'textContainer > span' : {
  textTransform: 'uppercase',
  animation: 'glow 2s ease-in-out infinite',
},

'@keyframes glow' : {
  '0%, 100%' : {
    color: '#FFF',
    textShadow:' 0 0 10px #0652DD, 0 0 50px #0652DD, 0 0 100px #0652DD',
  },
  
  '10%, 90%' : {
    color: '#111',
    textShadow: 'none',
  },
},

'textContainer > span:nth-child(2)' : {
  animationDelay: '0.25s',
},

'textContainer > span:nth-child(3)' : {
  animationDelay: '0.5s',
},

'textContainer > span:nth-child(4) ': {
  animationDelay: '0.75s',
},

'textContainer > span:nth-child(5)' : {
  animationDelay: '1s',
},

'textContainer > span:nth-child(6)' : {
  animationDelay: '1.25s',
},

'textContainer > span:nth-child(7)': {
  animationDelay: '1.5s',
}
})

function ProductHero(props) {
  const { classes } = props;

  return (
          
    <div className={classes.body}>
      <div className={classes.textContainer}>
        <span>a</span>
        <span>w</span>
        <span>e</span>
        <span>s</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
      </div>
    </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
*/}

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  snackbar: {
    width: "100%",
  },
  snackbarContent: {
    width: "100%",
  },
});


class FabIntegrationSnackbar extends React.Component {
  state = {
    open: false,
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount(){
    this.setState({open: true})
  }
  render() {
    const { classes, message } = this.props;
    const { open } = this.state;
   // const fabClassName = classNames(classes.fab, open ? classes.fabMoveUp : classes.fabMoveDown);

    return (
      <div className={classes.root}>
        
          <Snackbar
            open={open}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent,
            }}
            message={<span id="snackbar-fab-message-id">{ message }</span>}
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
               x
              </Button>
            }
            className={classes.snackbar}
          />
        </div>
    );
  }
}

FabIntegrationSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FabIntegrationSnackbar);