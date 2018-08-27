import React, { Fragment } from "react";
import { AsyncStorage } from "react-native";
import { createStackNavigator } from "react-navigation";
import Login from "../containers/login";
import Register from "../containers/register";
import Home from "../containers/home";
import photos from "../components/photos";

const Router = ({ initialRouteName }) => {
  const CustomNavigator = createStackNavigator(
    {
      Login: { screen: Login },
      Register: { screen: Register },
      Home: { screen: Home },
      photos: { screen: photos }
    },
    {
      headerMode: "none",
      initialRouteName
    }
  );

  return <CustomNavigator />;
};

export default Router;
