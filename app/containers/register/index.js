import React, { Component } from "react";
import { AppConsumer } from "../../provider";
import Register from "./register";

class RegisterConsumer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <AppConsumer>
        {props => <Register {...props} navigation={navigation} />}
      </AppConsumer>
    );
  }
}

export default RegisterConsumer;
