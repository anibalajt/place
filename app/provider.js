import React, { Component, createContext } from "react";
import {} from "./utils";
import { getToken, login, register } from "./api";
const { Consumer, Provider } = createContext({});

export default class AppProvider extends Component {
  state = { token: "RRfkB_Pgj0T5Xtii57co2_BgojNZSbfDpEWNmP3Tifg" };

  token = async () => {
    const token = await getToken();
    this.setState({ token });
    console.log("token :", token);
  };
  register = async () => {
    const { token } = this.state;
    const body = {
      names: "test",
      mail: "test2@test.com",
      pass: "12345678"
    };
    const response = await register(token, body);

    if (response.registered === true && uid !== 0) {
    } else {
      response.message;
    }
  };
  login = async () => {
    const { token } = this.state;
    const body = {
      email: "test2@test.com",
      password: "12345678"
    };
    const response = await login(token, body);
    console.log("response :", response);
    if (response.uid !== 0) {
    } else {
      response.message;
    }
  };
  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getToken: this.token,
          register: this.register,
          login: this.login
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export const AppConsumer = Consumer;
