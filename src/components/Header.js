import React, {PureComponent} from "react";
import {AppBar, Button, Grid, Menu, MenuItem, withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

const styles = () => ({
  root: {
    padding: 8,
  },
});

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleToHome = () => {
    this.props.history.push(`/`);
  };

  handleToCalculator = () => {
    this.props.history.push(`calculator`);
  };

  render() {
    const {classes, location} = this.props;
    const {anchorEl} = this.state;
    const isCalculatorURL = location.pathname.indexOf(`calculator`) !== -1;
    return (
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
            <Button
              fullWidth
              color={isCalculatorURL ? `default` : `primary`}
              variant={isCalculatorURL ? `outlined` : `contained`}
              onClick={this.handleToHome}
            >
              Exchange rates
            </Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button
              fullWidth
              color={isCalculatorURL ? `primary` : `default`}
              variant={isCalculatorURL ? `contained` : `outlined`}
              onClick={this.handleToCalculator}
            >
              Convertion calculator
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Header));
