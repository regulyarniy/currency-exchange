import React, {PureComponent, Fragment} from "react";
import {
  AppBar,
  Button,
  Grid, Input,
  Menu,
  MenuItem,
  Paper,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
  root: {
    padding: 8
  },
  paper: {
    margin: 16
  },
  input: {
    margin: 8
  }
});

class Calculator extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    return (
      <Fragment>
        <AppBar className={classes.root} position="static" color="default">
          <Grid container justify="flex-end" alignItems="center" spacing={16}>
            <Grid item xs={12} sm="auto">
              <Button
                fullWidth
                color="secondary"
                variant="outlined"
                aria-owns={anchorEl ? `simple-menu` : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                Base Currency: USD
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>USD</MenuItem>
                <MenuItem onClick={this.handleClose}>RUB</MenuItem>
                <MenuItem onClick={this.handleClose}>EUR</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button fullWidth variant="outlined">Exchange rates</Button>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button fullWidth color="primary" variant="contained">Convertion calculator</Button>
            </Grid>
          </Grid>
        </AppBar>
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
      </Fragment>
    )
  }
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Calculator);
