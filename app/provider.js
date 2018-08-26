/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, createContext } from "react";
import { View } from "react-native";

const { Consumer, Provider } = createContext({});

export default class AppProvider extends Component {
  state = {};
  render() {
    return (
      <Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export const AppConsumer = Consumer;
