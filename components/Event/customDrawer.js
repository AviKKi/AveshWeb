import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  drawerPaper: {
    width: '100%',
  },
};

const ResponsiveDrawer = props => {
  const { classes,children, ...other } = props
  return (
  <div>
    <Drawer
      {...other}
      type="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  </div>
);

}

export default withStyles(styles)(ResponsiveDrawer);
