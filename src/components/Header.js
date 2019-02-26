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

  get menuItems() {
    return this.props.currencies
      .map((currency) =>
        <MenuItem
          key={currency}
          onClick={() => this.handleClose(currency)}
        >
          {currency}
        </MenuItem>
      )
  }

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = (currency) => {
    this.setState({anchorEl: null});
    this.props.onBaseChange(currency);
  };

  handleToHome = () => {
    this.props.history.push(`/`);
  };

  handleToCalculator = () => {
    this.props.history.push(`calculator`);
  };

  render() {
    const {classes, location, base} = this.props;
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
              Base Currency: {base}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => this.handleClose(base)}
            >
              {this.menuItems}
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
              Exchange calculator
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
  history: PropTypes.object.isRequired,
  base: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onBaseChange: PropTypes.func
};

export default withRouter(withStyles(styles)(Header));
