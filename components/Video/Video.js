import React from 'react';
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      // height:'400px'
      // height: '60%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      // height: '180px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '180px'
    },
    textAlign: 'center',
  },
  media:{
    fontSize: '3.5rem',
    [theme.breakpoints.down('sm')]:{
      fontSize: '2.4rem'
    }
  }
})
class Video extends React.Component {
  state = {
    show: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 3000)
  }

  render() {
    const { classes } = this.props;
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      },
    };

    return (
      <div style={{ textAlign: 'center', width: '80%',margin:'auto',padding:'10px 0' }}>
        <h1 className={classes.media} style={{ margin: '10px', textShadow: '2px 8px 2px black', letterSpacing: '0.1em', textAlign: 'center', fontFamily: 'Harry', color: '#FFF' }}>Official Teaser</h1>
          
        <div style={{ backgroundColor: "rgba(0,0,0,0.3)", width:'minWidth' }}>
          <p style={{ color: '#fff', fontFamily: 'Harry', width: '100%', fontSize: '1.5rem', margin: '30px auto', textAlign: 'center' }}>
            Dear potterheads,<br />
            Awaiting a fun filled celebration? Break the monotony and join us in a magical rollercoaster ride.<br />
            Welcome to the wizarding world..come and check your technical skills with us. Get your broom ready and experience the magical world with AVESH.
          </p>
        </div>
        {
          this.state.show ? <YouTube
            videoId="k4sgwMKUIHc"
            className={classes.root}
            opts={opts}
            onReady={this._onReady}
          /> : <></>
        }
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default (withStyles)(styles)(Video);

  // className={string}                // defaults -> null
  // containerClassName={string}       // defaults -> ''
  // onPlay={func}                     // defaults -> noop
  // onPause={func}                    // defaults -> noop
  // onEnd={func}                      // defaults -> noop
  // onError={func}                    // defaults -> noop
  // onStateChange={func}              // defaults -> noop
  // onPlaybackRateChange={func}       // defaults -> noop
  // onPlaybackQualityChange={func}