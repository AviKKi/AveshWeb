import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    clock:{
        width: '80px',
        height: '80px',
        display: 'flex',
        borderRadius: '50%',
        border: '2px solid red',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10px',
        flexDirection: 'column'
    },
    timer:{
        display:'flex',
        margin: 'auto'
    },
    text:{
        fontSize: '0.8rem',
        display: 'block'
    },
    tick:{
        fontSize:'2.5rem',
    }
})

class Clock extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    } 

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        setInterval(() =>this.getTimeUntil(this.props.deadline),1000);
    }

    leading0(num){
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time',time);
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        // console.log('seconds',seconds,'minutes',minutes,'hours',hours,'days',days);
        this.setState({days, hours, minutes, seconds});
    }

    render(){
        const {classes} = this.props;
        // this.getTimeUntil(this.props.deadline);
        return(
        <div className={classes.timer}>
            <div className={classes.clock}>
                <div className={classes.tick}>{this.leading0(this.state.days)}</div>
                <div className={classes.text}>days</div>
            </div>
            <div className={classes.clock}>
                <div className={classes.tick}>{this.leading0(this.state.hours)}</div>
                <div className={classes.text}>hours</div>
            </div>
            <div className={classes.clock}>
                <div className={classes.tick}>{this.leading0(this.state.minutes)}</div> 
                <div className={classes.text}>minutes</div>
            </div>
            <div className={classes.clock}>
                <div className={classes.tick}>{this.leading0(this.state.seconds)}</div>
                <div className={classes.text}>sec</div>
            </div>
        </div>
        )
    }
}

export default (withStyles)(styles)(Clock);