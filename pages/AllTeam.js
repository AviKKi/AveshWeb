import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import LayoutBody from '../components/Layout/LayoutBody';
import Layout from '../components/Layout/Layout';
import Typography from '../components/Typography/Typography';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Team from '../components/Home/Team';
import Link from 'next/link';
import Head from 'next/head';

const styles = theme => ({

  root:
  	{
    marginTop: theme.spacing.unit * 0,
    marginBottom: theme.spacing.unit * 0,
    // backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:8,
	},
  container : {
    padding : "5vh",
    [theme.breakpoints.down('sm')]:{
      padding: '4vh 1vh'
    }
  },
  card: {
    marginTop:"2.5vh",
    padding: theme.spacing.unit * 2,
    width : 216,
    [theme.breakpoints.down("sm")]: {
      width:'90%',
    },
    height: "100%",
    borderRadius:3,
  },
  media: {
    width : 182,
    height: 0,
    borderRadius:'50%',
  },
  head: {
    marginTop:100,
    fontFamily:'Harry',
    color:'white',
    fontSize:'3em',
    [theme.breakpoints.down('sm')]:{
      fontSize:'2em',
    }
  }
 });

 const teams = [
    {
      title : 'Fest-Management',
      detail : [
      {
        name : "Satyam Lachhwani",
        profile : "",
        // pic : "../static/team/.jpg"
      },
      {
        name : "Naama Ali",
        profile : "",
        // pic : "../static/team/.jpg"
      },
      {
        name : "Anmol Matharu",
        profile : "",
        // pic : "../static/team/.jpg"
      },
      ]
  },

    {
      title : 'Website',
      detail : [
      {
        name : "Atul Yadav(AviKKi)",
        profile : "",
        // pic : "../static/team/github.png"
      },
      {
        name : "Diksha Verma",
        profile : "",
        // pic : "../static/team/diksha.jpg"
      },
      {
        name : "Chandra Shekhar Sahu",
        profile : "",
        // pic : "../static/team/github2.png"
      },
      {
        name : "Arun Kumar Behra",
        profile : "",
      }
      ]
    },

    {
      title : 'Graphics',
      detail : [
      {
        name : "Ashutosh Netam",
        profile : "",
        // pic : "../static/team/ashu.jpeg"
      },
      {
        name : "Bhavesh Chandrakar",
        profile : "",
        // pic : "../static/team/bhavesh.jpg"
      },
      {
        name : "Nishita Toshi",
        profile : "",
        // pic : "../static/team/nishita.jpg"
      },
      ]
    },
    {
      title : 'Support',
      detail : [
      {
        name : "Palash Dubey",
        profile : "",
        // pic : "../static/team/ashu.jpeg"
      },
      {
        name : "Alka Tiwari",
        profile : "",
        // pic : "../static/team/bhavesh.jpg"
      },
      {
        name : "Muskaan Agrawal",
        profile : "",
        // pic : "../static/team/nishita.jpg"
      },
      ]
    },

     {
      title : 'Public Relation',
      detail : [
      {
        name : "Ditiya Mukharjee",
        profile : "",
        // pic : "../static/team/ayushi.jpg"
      },
      {
        name : "Gaurav Sharma",
        profile : "",
        // pic : "../static/team/salomi.jpg"
      },
      {
        name : "Pragya Mishra",
        profile : "",
        // pic : "../static/team/salomi.jpg"
      },
      {
        name : "Ashish Kumar",
        profile : "",
        // pic : "../static/team/salomi.jpg"
      },
      ]
    },
  ];

function ProductCategories(props) {
  const { classes } = props;

  return (
    <>
    <Head>
          <link rel='stylesheet' src='../static/css/styles.css' />
        </Head>
    <div className='body'>
      <Navbar st={'static'}/>
      <Team />
    {/* <Layout className={classes.body}> */}
     {teams.map(team => (
    <LayoutBody className={classes.root} component="section" width="large">

      <Typography variant="h4" marked="center" align="center" component="h2" className={classes.head}>
        {team.title} Team
      </Typography>

      <GridContainer
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"

      className={classes.container}
      >
      {team["detail"].map(t => (
      <GridItem xs={11} md={4} lg={4} align='center'>
          <Card className={classes.card}>
            <CardActionArea>
              {/* <CardMedia
                className={classes.media}
                image={t.pic}
              /> */}
              <CardContent>
                {/* <Link href={t.profile}> */}
                <Typography variant="button" component="h2" align="center" >
                  <b> <hr style={{width:'70%'}}/>{t.name}</b>
                </Typography>
                {/* </Link> */}
              </CardContent>
            </CardActionArea>
            </Card>
      </GridItem>
      ))}

      </GridContainer>

    </LayoutBody>
    ))}
    {/* </Layout> */}
    <Footer st="static"/>
    <style jsx>{`
      @font-face{
        font-family: Harry;
        src: url(../static/font/HARRYP__.TTF);
      }
     .body{
        background:black;
        background-color:rgba(0,0,0,0.8);
        background-image:url('http://getwallpapers.com/wallpaper/full/d/f/5/17391.jpg');
        background-position:center;
        background-size:"auto 100%";
        background-attachment:fixed;
        
      }
      @media (max-width:568px){
        .body{
          background: rgba(194,187,196,0.8);
          // background: rgba(243,226,199,1);
        }
      }
    `}</style>
     </div>
     </>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
