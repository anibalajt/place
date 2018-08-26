import React, { Component } from "react";
import { AppConsumer } from "../../provider";
import Login from "./login";

class LoginConsumer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <AppConsumer>
        {props => <Login {...props} navigation={navigation} />}
      </AppConsumer>
    );
  }
}

export default LoginConsumer;
