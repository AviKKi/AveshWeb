import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux"

const styles = {
  root: {
    flexGrow: 1
  },
};

function TopLoader(props) {
  const { classes,show } = props;
  console.log("Toploader", props)
  return (
    <div >
    <div style={{position: "fixed", width:"100%", zIndex:99999}} className={classes.root}>
      {
        show?<LinearProgress color="secondary"/>:undefined
      }
    </div>
    </div>
  );
}

TopLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state=>{
  return {
    show: state.common.topLoader
  }
}
export default connect(mapStateToProps)(withStyles(styles)(TopLoader))
