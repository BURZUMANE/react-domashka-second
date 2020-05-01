import React, { Fragment, Component } from "react";
// import styled from "styled-components";
import { CounterPanel } from "./Counter/Counter";
import ShowRevs from "./ShowRevs/ShowRevs";
import Notification from "./Notification/Notification"

class ReviewsApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; 
  increment = (value) =>{
    this.setState((prev) => ({ [value]: prev[value] + 1 }));
  };
  render() {
    return (
      <Fragment>
        <h2>Please leave us a feedback</h2>
        <CounterPanel good={this.good} neutral={this.neutral} bad={this.bad} increment={this.increment} />
        {(this.state.good > 0 || this.state.bad > 0 || this.state.neutral > 0)  ? (
          <ShowRevs info={this.state} />
        ) : (
          <Notification message="No feedback given" />
        )}
        
        
      </Fragment>
    );
  }
}

export default ReviewsApp;
