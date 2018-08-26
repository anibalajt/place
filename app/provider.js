import React, { Component, createContext } from "react";
import { AsyncStorage } from "react-native";
import {} from "./utils";
import { getToken, login, register } from "./api";
const { Consumer, Provider } = createContext({});

class AppProvider extends Component {
  state = { token: null };

  componentDidMount = async () => {
    // await AsyncStorage.removeItem("token")
    this.token();
  };
  token = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      if (!token) {
        await getToken();
        this.token();
      }
      this.setState({ token });
    } catch (error) {
      console.log("error :", error);
    }

    // const token = await getToken();
    // return token;
  };
  register = async navigation => {
    const { token } = this.state;
    const body = {
      names: "test",
      mail: "test19@test.com",
      pass: "12345678"
    };
    const response = await register(token, body);
    if (response.id.registered === true && response.id.uid !== 0) {
      delete body.pass;
      this.goTo({ ...response.id, ...body }, navigation);
    } else {
      response.id.message;
    }
  };
  login = async navigation => {
    const { token } = this.state;
    const body = {
      email: "test2@test.com",
      password: "12345678"
    };
    const response = await login(token, body);
    if (response.uid !== 0) {
      this.goTo(response, navigation);
    } else {
      response.message;
    }
  };
  goTo = async (response, navigation) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(response));
      navigation.navigate("Home");
    } catch (error) {}
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
export default AppProvider;
export const AppConsumer = Consumer;
