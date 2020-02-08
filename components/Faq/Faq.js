import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import FAQ from '../../data/FAQ';

const ExpansionPanel = withStyles(theme=>({
    root: {
        opacity: 0.8,
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
    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
        <div id="faq">
            <h2>FAQ</h2>
            {FAQ.map((el,i) => (
                <ExpansionPanel square expanded={expanded === "panel"+i} onChange={handleChange("panel"+i)}>
                <ExpansionPanelSummary aria-controls={"panel"+i+"d-content"} id={"panel"+i+"d-header"}>
                  <Typography>Q : {el.que}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                      {el.ans}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
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