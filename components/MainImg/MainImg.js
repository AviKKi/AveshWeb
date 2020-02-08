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
        margin: '20px',
        backgroundImage: "url(../../static/img/2020/avesh.png)",
        backgroundSize:'cover',
        backgroundColor: 'rgba(25,40,65,0.5)',
        borderRadius: '25px',
        
        [theme.breakpoints.down('sm')]:{
            width: '90%',
            height: '200px'
        },
        [theme.breakpoints.up('sm')]:{
            width: '40%'
        },
        [theme.breakpoints.up('md')]:{
            width: '35%'
        },
        [theme.breakpoints.up('lg')]:{
            width: '27%'
        },
    }
})

function MainImg(props){
    const {classes}=props;
    return (
        <>
            <div className={classes.root}>
                <h3 style={{fontFamily: 'Harry', fontSize:'2rem'}}>Government Engineering College, Raipur</h3>
                <h2>Presents</h2>
                <div className={classes.name}>
                    {/* <img src="../../static/img/2020/avesh.png"/> */}
                </div>
                <div>
                    <h2 style={{marginTop: '50px'}}>EXPLORE. DREAM. DISCOVER</h2>
                </div>
            </div>
            <style jsx>{`
                @font-face{
                    font-family: Harry;
                    src: url(static/font/HARRYP__.TTF);
                }
                h1,h3,h4,h2{
                    margin:0px;
                    // margin-left: 150px;
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