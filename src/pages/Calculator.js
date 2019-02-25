import React, {PureComponent} from "react";
import {
  Grid,
  Input,
  Paper,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
  paper: {
    margin: 16
  },
  input: {
    margin: 8
  }
});

class Calculator extends PureComponent {

  render() {
    const {classes} = this.props;
    return (
      <Paper elevation={1} className={classes.paper}>
        <Grid container justify="space-around" alignItems="center" spacing={16}>
          <Grid item xs={12} container justify="center">
            <Typography component="h3" variant="h3" align="center">
              Currency calculator
            </Typography>
          </Grid>
          <Grid item xs={12} sm="auto" container justify="center">
            <Input
              className={classes.input}
              type="number"
              inputProps={{
                name: `first-amount`,
                id: `first-amount`,
                min: `0`,
                step: `1`
              }}
            />
            <Select
              className={classes.input}
              native
              inputProps={{
                name: `first-currency`,
                id: `first-currency`,
              }}
            >
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
            </Select>
          </Grid>
          <Grid item xs={12} sm="auto" container justify="center">
            <Input
              className={classes.input}
              type="number"
              inputProps={{
                name: `second-amount`,
                id: `second-amount`,
                min: `0`,
                step: `1`
              }}
            />
            <Select
              className={classes.input}
              native
              inputProps={{
                name: `second-currency`,
                id: `second-currency`,
              }}
            >
              <option value="USD">USD</option>
              <option value="RUB">RUB</option>
              <option value="EUR">EUR</option>
            </Select>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Calculator);
