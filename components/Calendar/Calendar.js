import React from 'react';
import Clock from '../../static/timer/Clock';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1547756536-cde3673fa2e5)',
        backgroundSize: 'cover',
        height: '754px'
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
                <Clock 
                    deadline={this.state.deadline}
                    style={{color: "#fff"}}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Calender);