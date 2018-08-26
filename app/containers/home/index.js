import React, { Component } from "react";
import { AppConsumer } from "../../provider";
import Home from "./home";

class HomeConsumer extends Component {
  render() {
    return <AppConsumer>{props => <Home {...props} />}</AppConsumer>;
  }
}

export default HomeConsumer;
