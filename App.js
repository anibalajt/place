/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import AppProvider from "./app/provider";
import Router from "./app/config/routes";
import { getToken } from "./app/api";
class App extends Component {
  state = { initialRouteName: null };
  initialRouter = async () => {
    try {
      // await AsyncStorage.removeItem("user");
      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);
      if (user.uid) {
        return "Home";
      } else {
        await getToken();
        return "Login";
      }
    } catch (error) {
      await getToken();
      return "Login";
    }
  };
  componentDidMount = async () => {
    const initialRouteName = await this.initialRouter();
    this.setState({ initialRouteName });
  };
  render() {
    const { initialRouteName } = this.state;

    return (
      <AppProvider>
        <Router initialRouteName={initialRouteName} />
      </AppProvider>
    );
  }
}

export default App;
