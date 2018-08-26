import React, { Component } from "react";
import { AppConsumer } from "../../provider";
import Login from "./login";

class PatientNew extends Component {
  render() {
    return <AppConsumer>{props => <Login {...props} />}</AppConsumer>;
  }
}

export default PatientNew;
