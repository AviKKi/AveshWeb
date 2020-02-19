import React from 'react';
import { withStyles } from '@material-ui/core';
import Moment from 'react-moment';
import 'moment-timezone';

const styles = theme => ({
    box: {
        width:'80%',
        border: '2px solid white',
        borderRadius: '5px',
        minHeight: '100px',
        margin: '10px auto',
        color: '#FF9'
    }
});

function UpdateBox(props){
    const {classes} = props;
    const dateToFormat = props.time;
    return (
        <div className={classes.box}>
            <h1 style={{margin:'0px 5px'}}>
                {props.title}
            </h1>
            <p style={{margin:'2px 5px'}}>{props.msg}</p>
            <p style={{margin:'0px 5px',textAlign: 'right'}}><Moment format="DD/MM/YYYY HH:mm">{dateToFormat}</Moment></p>
        </div>
    );
}

export default withStyles(styles)(UpdateBox);