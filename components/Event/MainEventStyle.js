
const MainEventStyle = theme => ({
  root: {
    margin: theme.spacing.unit * 0,
    padding: theme.spacing.unit * 0,
    backgroundColor : "#000",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  card: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1490822180406-880c226c150b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80)',
    backgroundSize: 'cover',
    backgroundAttachment:'fixed',
    borderRadius:0,
    opacity : 1,
    position :'inherit',
  },
  cardContent: {
    background: "rgba(0,0,0,0.5)",
    height:"100%",
    position: "sticky",
    overflow: "auto"
},
  media: {
    marginTop:'6vh',
    height: 120,
    width: 120,
    border: '2px solid #FFFFFF',
    borderRadius :"50%",
    position :'inherit',
    zIndex : "2"
  },
  event:{
    backgroundSize:'cover',
    opacity:1,
  },
  eventTitle:{
    color:'#ffffff',
    textAlign:'center',
    fontWeight:'500',
    marginTop:'2vh',
    fontFamily: 'cursive'
  },
  description:{
    color:'#ffffff',
    textAlign:'justify',
    margin:'4vh',
    fontSize:'16px',
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop:'3vh',
      fontSize:'14px',
      margin:0,
    }
  },
  details:
  {
    marginTop:'5vh',
    marginBottom:'1vh',
    margin:'10vh',
    [theme.breakpoints.down("sm")]: {
      marginTop:'4vh',
      margin:'-2vh',
      marginBottom:'5vh',
    },
  },
   contact:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:'14px',
    marginTop:'4vh',
    [theme.breakpoints.down("sm")]: {
      marginTop:'4vh',
      fontSize:'12px',
      margin:0 ,
    }
  },
   pdf:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:'14px',
    marginTop:'5vh',
    [theme.breakpoints.down("sm")]: {
      marginTop:'7vh',
      fontSize:'12px',
      margin:0 ,
    }
  },
  palette: {
    colors: {
      light: '#757575',
      main: '#cfd8dc',
      dark: '#424242',
      contrastText: '#fff',
    },
  },
  hr : {
    width:"20%",
      marginTop:"6vh",
    [theme.breakpoints.down("sm")]: {
      width:"40%",
      marginTop:"6vh"
    },
  },
});


export default MainEventStyle;
