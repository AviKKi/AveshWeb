import React from 'react';
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core';
 

const styles = theme=> ({
  root: {
    width: '50%',
    [theme.breakpoints.down('md')]:{
      width:'80%',
      // height:'400px'
      // height: '60%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'90%',
      // height: '180px'
    },
    [theme.breakpoints.down('xs')]:{
      width:'90%',
      height: '180px'
    },
    textAlign: 'center',
  }
})
class Video extends React.Component {
  render() {
    const {classes}=this.props;
    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      },
    };
 
    return (
      <div style={{textAlign:'center', width: '100%'}}>
        <div style={{backgroundColor: "rgba(0,0,0,0.3)"}}>
          <h1 style={{margin:'10px', textShadow:'2px 8px 2px black',letterSpacing:'0.2em',textAlign: 'center', fontFamily: 'Harry', fontSize: '3em', color:'#FFF'}}>Official Teaser</h1>
          <p style={{color: '#fff', fontFamily: 'Harry', width: '80%', fontSize:'1.5rem',margin: '30px auto',textAlign: 'center'}}>
            Dear potterheads,<br/>
            Awaiting a fun filled celebration? Break the monotony and join us in a magical rollercoaster ride.<br />
            Welcome to the wizarding world..come and check your technical skills with us. Get your broom ready and experience the magical world with AVESH.
          </p>
        </div>
        <YouTube
          videoId="k4sgwMKUIHc"
          className={classes.root}
          opts={opts}
          onReady={this._onReady} 
        />
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