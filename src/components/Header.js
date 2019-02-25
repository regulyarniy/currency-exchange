import React, {PureComponent} from "react";
import {AppBar, Button, Grid, Menu, MenuItem, withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

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

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
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
            <Button fullWidth color="primary" variant="contained">Exchange rates</Button>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Button fullWidth variant="outlined">Convertion calculator</Button>
          </Grid>
        </Grid>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
