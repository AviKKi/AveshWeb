import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FAQ from '../../data/FAQ';

const ExpansionPanel = withStyles(theme=>({
    root: {
        
      border: '1px solid rgba(0, 0, 0, .125)',
      [theme.breakpoints.up('md')]:{
        width: '80%',
        margin: 'auto'
      },
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  }))(MuiExpansionPanel);


  const ExpansionPanelSummary = withStyles(theme=>({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  }))(MuiExpansionPanelSummary);


  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing*2,
      backgroundColor: '#ccc'
    },
  }))(MuiExpansionPanelDetails);


function Faq(props){
    const {classes} = props;
    const [expanded, setExpanded] = React.useState('panel10');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
        <div>
            <h2  style={{margin:'10px', textShadow:'2px 8px 2px black',letterSpacing:'0.2em',textAlign: 'center', fontFamily: 'Harry', fontSize: '4em', color:'#FFF'}}>FAQ</h2>
            <div style={{marginTop: '60px',opacity: '0.9'}}>
              {FAQ.map((el,i) => (
                  <ExpansionPanel square expanded={expanded === "panel"+i} onChange={handleChange("panel"+i)}>
                  <ExpansionPanelSummary aria-controls={"panel"+i+"d-content"} id={"panel"+i+"d-header"} expandIcon={<ExpandMoreIcon />}>
                    <Typography>Q : {el.que}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                        {el.ans}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
            </div>
            <style jsx>{`
                h2{
                    font-family: Harry;
                    text-align:center;
                    font-size: 2rem
                }
            `}</style>
        </div>
    )
}

export default (Faq);