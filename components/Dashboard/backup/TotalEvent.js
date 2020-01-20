import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '../Typography/Typography';
import Button from '../Button/Button';

const styles = theme => ({
  root: 
  	{
    margin: theme.spacing.unit * 0,
	},
  heading: {
  	backgroundColor: '#bdbdbd',
  },
  tableTitle: {
  	marginTop: theme.spacing.unit * 5,
  	textAlign: "center",
  	justify: 'center',
  	backgroundColor:  '#424242',
   	color: theme.palette.common.white,
   	borderRadius: 25,
  }
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
      <Table className={classes.table}>
        <TableHead className={classes.heading}>
          <TableRow >
            <TableCell>EVENT </TableCell>
            <TableCell>TIME</TableCell>
            <TableCell>PLACE</TableCell>
            <TableCell>PAYMENT</TableCell>
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
      </Table>
  );
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
