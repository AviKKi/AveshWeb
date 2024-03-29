import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: "250px",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
})

function PaperSheet(props) {
  const { classes, name, description, id, participating, participateHandler, updatedNodes } = props

  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h5" component="h3">
        {name}
      </Typography>
      {participating ?
        (<Button
          variant="outlined"
          disabled>You have been enrolled.</Button>)
        : (<Button
          variant="outlined"
          onClick={participateHandler}
          color="secondary">Participate</Button>)
      }
    </Paper>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperSheet)
