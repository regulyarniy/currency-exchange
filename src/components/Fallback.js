import React from "react";
import {CircularProgress, Grid, withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Fallback = ({classes}) => {
  return <Grid container justify="center"><CircularProgress className={classes.progress} color="primary"/></Grid>
};

Fallback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Fallback);
