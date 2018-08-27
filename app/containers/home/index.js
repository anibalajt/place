import React, { Component } from "react";
import { AppConsumer } from "../../provider";
import Home from "./home";

class HomeConsumer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <AppConsumer>
        {props => <Home {...props} navigation={navigation} />}
      </AppConsumer>
    );
  }
}

export default HomeConsumer;
