import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root:{
        // backgroundImage: 'url(http://getwallpapers.com/wallpaper/full/b/0/6/263616.jpg)',
        // backgroundSize: 'cover',
        // width: '100%',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Harry',
        // paddingTop: '340px'
        // marginTop: '200px'
    }
})

function MainImg(props){
    const {classes}=props;
    return (
        <>
            <div className={classes.root}>
                <h3>Government Engineering College</h3>
                <h4>Raipur</h4>
                <h2>Presents</h2>
                <h4>Chapter 4 of</h4>
                <h1>Avesh</h1>
            </div>
            <style jsx>{`
                @font-face{
                    font-family: Harry;
                    src: url(static/font/HARRYP__.TTF);
                }
                h1,h3,h4,h2{
                    margin:0px;
                    margin-left: 150px;
                }
                h3,h4,h2{
                    letter-spacing: 0.2rem;
                }
                h1{
                    margin: 0;
                    letter-spacing: 0.4rem;
                    font-size: 7rem;
                    padding-top: 60px;
                    margin-left: 150px
                }
            `}</style>
        </>
    )
}


export default (withStyles)(styles)(MainImg);