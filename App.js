/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AppProvider from "./app/provider";
import Router from "./app/config/routes";

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};
export default App;
