import React from 'react';
import Clock from '../../static/timer/Clock';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        
        // backgroundImage: 'url(https://images.unsplash.com/photo-1547756536-cde3673fa2e5)',
        // backgroundSize: 'cover',
        // height: '754px',

        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'right',
        justifyContent: 'right',
        // alignContent: 'right',
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
        marginLeft:'50%'
    }
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
              <div className={classes.root_inside}>
                <div className={classes.calender}>
                    <img src="static/img/2020/cal.png" style={{width:"60%", height:"auto" , }}/>
                </div>
                <div>
                    <Clock 
                        deadline={this.state.deadline}
                        style={{color: "#fff"}}
                    />
                </div>
              </div>
            </div>
        );
    }
}

export default withStyles(styles)(Calender);