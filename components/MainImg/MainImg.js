import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root:{
        // backgroundImage: 'url(http://getwallpapers.com/wallpaper/full/b/0/6/263616.jpg)',
        // backgroundSize: 'cover',
        // width: '100%',
        backgroundColor: "rgba(0,0,0,0.3)",
        display:'flex',
        flexDirection: 'column',
        color: '#FFF',
        textAlign: 'center',
        // fontFamily: 'Harry',
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
        // paddingTop: '340px'
        // marginTop: '200px'
    },
    name:{
        width: '25%',
        height: '225px',
        margin: '10px 20px',
        marginTop: '40px',
        // backgroundImage: "url(../../static/img/2020/avesh.png)",
        backgroundSize:'cover',
        backgroundColor: 'rgba(25,40,65,0.5)',
        borderRadius: '25px',
        
        [theme.breakpoints.down('sm')]:{
            width: '90%',
            height: '190px',
            marginTop:'10px'
        },
        [theme.breakpoints.up('sm')]:{
            width: '40%'
        },
        [theme.breakpoints.up('md')]:{
            width: '35%'
        },
        [theme.breakpoints.up('lg')]:{
            width: '30%'
        },
    },
    heading:{
        fontFamily: 'Harry', 
        fontSize:'2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.5rem',
            padding: '20px'
        }
    },
    tagLine:{
        marginTop: '50px',
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]:{
            fontSize:"1.2rem"
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"0.9rem"
        }
    }
})

function MainImg(props){
    const {classes}=props;
    return (
        <>
            <div className={classes.root}>
                <h3 className={classes.heading}>Government Engineering College, Raipur</h3>
                <h2>Presents</h2>
                <div className={classes.name}>
                    <img src="../../static/img/2020/avesh.png" width="100%" height="100%"/>
                </div>
                <div>
                    <h2 className={classes.tagLine}>EXPLORE.DREAM.DISCOVER</h2>
                </div>
            </div>
            <style jsx>{`
                @font-face{
                    font-family: Harry;
                    src: url(static/font/HARRYP__.TTF);
                }
                h3,h2{
                    margin:0px;
                    letter-spacing: 0.2rem;
                }
            `}</style>
        </>
    )
}


export default (withStyles)(styles)(MainImg);