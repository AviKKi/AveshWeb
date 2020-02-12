import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    timer:{
        display:'flex',
        margin: 'auto'
    },
    text:{
        fontSize: '01rem',
        display: 'block',
        color:'white',
    },
    tick:{
        fontSize:'2.5rem',
        color:'white',
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem'
        }
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
        // console.log('time',time);
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        // console.log('seconds',seconds,'minutes',minutes,'hours',hours,'days',days);
        this.setState({days, hours, minutes, seconds});
        if(this.state.seconds+this.state.minutes+this.state.hours+this.state.days === 0){
            this.setState.seconds=0;
            this.setState.minutes=0;
            this.setState.hours=0;
            this.setState.days=0;
            
        }
    }

    render(){
        const {classes} = this.props;
        // this.getTimeUntil(this.props.deadline);
        return(
        <div className={classes.timer}>
            <div className="clock">
                <div className={classes.tick}>{this.leading0(this.state.days)}</div>
                <div className={classes.text}>days</div>
            </div>
            <div className="clock">
                <div className={classes.tick}>{this.leading0(this.state.hours)}</div>
                <div className={classes.text}>hours</div>
            </div>
            <div className="clock">
                <div className={classes.tick}>{this.leading0(this.state.minutes)}</div> 
                <div className={classes.text}>minutes</div>
            </div>
            <div className="clock">
                <div className={classes.tick}>{this.leading0(this.state.seconds)}</div>
                <div className={classes.text}>seconds</div>
            </div>
            <style jsx>{`
            
            .clock{
                width: 75px;
                height: 75px;
                display: flex;
                font-family: 'Harry';
                border-radius: 50%;
                border: 2px solid #d40404;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin: 10px;
                flex-direction: column;
                background-color:rgba(0,0,0,0.3);
                animation:glow 1.25s ease-in infinite;
            }
            @font-face{
                font-family: Harry,
                src: url('../font/HARRYP__.TTF')
            }
            @keyframes glow{
                0%{
                    box-shadow:0px 0px -10px gold;
                }
                40%{
                    box-shadow:0px 0px 20px gold;
                }
                60%{
                    box-shadow:0px 0px 20px gold;
                }
                100%{
                    box-shadow:0px 0px -10px gold;
                }
            }
            @media (max-width:400px){
                .clock{
                    margin: 5px;
                    width: 60px;
                    height: 60px
                }
            }
            `}</style>
        </div>
        )
    }
}

export default (withStyles)(styles)(Clock);