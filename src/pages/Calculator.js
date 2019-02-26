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
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 1,
      firstType: ``,
      secondValue: 1,
      secondType: ``
    };
  }

  componentDidMount() {
    this.setState({firstType: this.props.currencies[0], secondType: this.props.currencies[0]})
  }

  get currencyOptions() {
    return this.props.currencies
      .map((currencyName) => <option key={currencyName} value={currencyName}>{currencyName}</option>)
  }

  handleChangeFirstInput = (event) => {
    const {firstType, secondType} = this.state;
    const {initialRates} = this.props;
    const firstValue = parseFloat(event.target.value);
    const secondValue = (firstValue / initialRates[firstType] * initialRates[secondType]).toFixed(4);
    this.setState({firstValue, secondValue})
  };

  handleChangeSecondInput = (event) => {
    const {firstType, secondType} = this.state;
    const {initialRates} = this.props;
    const secondValue = parseFloat(event.target.value);
    const firstValue = (secondValue / initialRates[secondType] * initialRates[firstType]).toFixed(4);
    this.setState({firstValue, secondValue})
  };

  handleChangeFirstType = (event) => {
    const {firstValue, secondType} = this.state;
    const {initialRates} = this.props;
    const firstType = event.target.value;
    const secondValue = (firstValue / initialRates[firstType] * initialRates[secondType]).toFixed(4);
    this.setState({secondValue, firstType});
  };

  handleChangeSecondType = (event) => {
    const {secondValue, firstType} = this.state;
    const {initialRates} = this.props;
    const secondType = event.target.value;
    const firstValue = (secondValue / initialRates[secondType] * initialRates[firstType]).toFixed(4);
    this.setState({firstValue, secondType});
  };

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
              value={this.state.firstValue}
              onChange={this.handleChangeFirstInput}
            />
            <Select
              className={classes.input}
              native
              inputProps={{
                name: `first-currency`,
                id: `first-currency`,
              }}
              onChange={this.handleChangeFirstType}
            >
              {this.currencyOptions}
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
              value={this.state.secondValue}
              onChange={this.handleChangeSecondInput}
            />
            <Select
              className={classes.input}
              native
              inputProps={{
                name: `second-currency`,
                id: `second-currency`,
              }}
              onChange={this.handleChangeSecondType}
            >
              {this.currencyOptions}
            </Select>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Calculator.propTypes = {
  classes: PropTypes.object.isRequired,
  currencies: PropTypes.array,
  initialRates: PropTypes.object,
};

export default withStyles(styles)(Calculator);
