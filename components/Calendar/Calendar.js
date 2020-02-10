import React from 'react';
import Clock from '../../static/timer/Clock';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        
        // backgroundImage: 'url(https://images.unsplash.com/photo-1547756536-cde3673fa2e5)',
        // backgroundSize: 'cover',
        // height: '754px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        justifyContent: 'right',
        alignContent: 'right',
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: '100%'
        // textAlign: 'center'
    },
    // calender:{
        
    // }
    root_inside: {
        width:'50%',
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'space-between',
        textAlign: 'center',
        marginLeft:'50%',
        [theme.breakpoints.down('md')]:{
            width: '80%',
            marginLeft: '20%'
        },
        [theme.breakpoints.down('md')]:{
            width: '100%',
            marginLeft: '0%'
        },

    },
});

class Calender extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'February 23,2020'
        }
    }
    render(){
    const {classes} = this.props;
        return (
            <div className={classes.root}>
                <h1 className="timer"  style={{ textShadow:'2px 8px 2px black',letterSpacing:'0.1em',textAlign: 'center', fontFamily: 'Harry', fontSize: '4em', color:'#FFF',margin:'10'}}>Mark The Dates</h1>
              <div className={classes.root_inside}>
                <div className={classes.calender}>
                    <img src="static/img/2020/cal.png" style={{width:"80%", height:"auto" , }}/>
                </div>
                <div>
                    <Clock 
                        deadline={this.state.deadline}
                        style={{color: "#fff"}}
                    />
                </div>
              </div>
              <style jsx>{`
                #main:hover{
                    transform:scale(1.05);
                  }
                  .timer{
                    animation:moveshadow 3s ease-in infinite;
                  }
                  @keyframes moveshadow{
                    0%{
                      text-shadow:2px 5px 2px green;
                    }
                    50%{
                      text-shadow:1px 6px 3px yellow;
                    }
                    100%{
                      text-shadow:2px 4px 4px blue;
                    }
      
                  }
              `}</style>
            </div>
        );
    }
}

export default withStyles(styles)(Calender);