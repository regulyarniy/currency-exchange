import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
  Paper
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
  list: {
    margin: `auto`,
    marginTop: 16,
    width: `100%`,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin: 16
  },
  ...backgrounds
});


class Home extends PureComponent {

  get listItems() {
    return Object.entries(this.props.rates)
      .map((item) => {
          const key = item[0];
          const value = item[1];
          const {classes} = this.props;
          return (
            <ListItem key={key} button>
              <Avatar className={classes[getRandomBackgroundKey(key)]}>{key}</Avatar>
              <ListItemText primary={value}/>
              <ListItemIcon>
                <Star color="default"/>
              </ListItemIcon>
            </ListItem>
          )
        }
      )
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper elevation={1} className={classes.paper}>
        <List className={classes.list}>
          {this.listItems}
        </List>
      </Paper>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  rates: PropTypes.object
};

export default withStyles(styles)(Home);
