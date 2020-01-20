import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../components/Layout/Layout';
import Typography from '../components/Typography/Typography';

const styles = theme => ({
  root: 
  	{
    margin: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
    margin: theme.spacing.unit * 0,
    },
	},
  table: {
  	marginTop: theme.spacing.unit * 2,
  },
  heading: {
  	backgroundColor: '#757575',
  },
  textcolor: {
  	color: theme.palette.common.white,
  },
  tableTitle: {
  	marginTop: theme.spacing.unit * 5,
  	textAlign: "center",
  	justify: 'center',
  	backgroundColor:  '#424242',
   	color: theme.palette.common.white,
   	borderRadius: 25,
  },
  notice : {
    margin:"16vh",
    fontFamily: 'cursive',
    fontSize :"30px",
    [theme.breakpoints.down('sm')]: {
    fontSize :"18px"
    },
  },
 })

 let id = 0;
function createData(event, schedule, place, remark) {
  id += 1;
  return { id, event, schedule, place, remark };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
 

function Schedule(props) {
  const { classes } = props;

  return (
  	<Layout>
    <div className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2" style={{marginTop:"4vh",fontFamily: 'cursive'}}>
        Schedule
      </Typography>

      <Typography align="center" component="h2" className={classes.notice}>
        <b> <i> Will Be Updated Soon... </i> </b>
      </Typography>

{/*
    <Typography variant="h6" className={classes.tableTitle}>
            DAY 1 - 25 FEB 2019
    </Typography>
      <Table className={classes.table}>
        <TableHead className={classes.heading}>
          <TableRow >
            <TableCell  className={classes.textcolor}>EVENT </TableCell>
            <TableCell  className={classes.textcolor}>SCHEDULE</TableCell>
            <TableCell className={classes.textcolor}>PLACE</TableCell>
            <TableCell className={classes.textcolor}>REMARKS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <TableCell component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell>{row.schedule}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.remark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}

    </div>
    </Layout>
  );
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
