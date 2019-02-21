import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Grid,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
  Menu,
  MenuItem
} from "@material-ui/core";
import {Star} from '@material-ui/icons';

const backgrounds = {
  yellow: {backgroundColor: `#FBC02D`},
  green: {backgroundColor: `#4CAF50`},
  lightgreen: {backgroundColor: `#8BC34A`},
  blue: {backgroundColor: `#0288D1`},
  lightblue: {backgroundColor: `#03A9F4`},
  orange: {backgroundColor: `#FF5722`}
};

const getRandomBackgroundKey = (string) => {
  const backgroundKeys = Object.keys(backgrounds);
  const backgroundCount = backgroundKeys.length;
  const stringHash = [...string].reduce((result, char) => result + char.charCodeAt(0), 0);
  return backgroundKeys[stringHash % backgroundCount];
};

const styles = (theme) => ({
  root: {
    padding: 8,
  },
  list: {
    margin: `auto`,
    marginTop: 16,
    width: `100%`,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  ...backgrounds
});


class Home extends PureComponent {
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
                Base Currency
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
        <List className={classes.list}>
          <ListItem button>
            <Avatar className={classes[getRandomBackgroundKey(`USD`)]}>USD</Avatar>
            <ListItemText primary="1"/>
            <ListItemIcon>
              <Star color="secondary"/>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <Avatar className={classes[getRandomBackgroundKey(`RUB`)]}>RUB</Avatar>
            <ListItemText primary="65.7533"/>
            <ListItemIcon>
              <Star/>
            </ListItemIcon>
          </ListItem>
        </List>
      </Fragment>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
