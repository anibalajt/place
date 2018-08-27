import React, { Component, createContext } from "react";
import { AsyncStorage } from "react-native";
import { isValidEmail } from "./utils";
import { getToken, login, register, savePlace, getPlace } from "./api";
const { Consumer, Provider } = createContext({});

class AppProvider extends Component {
  state = { token: null, user: null, places: null, markers: [] };

  componentDidMount = async () => {
    // await AsyncStorage.removeItem("token")
    try {
      let user = await AsyncStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        this.setState({ user });
        this.getPlace();
      }
    } catch (error) {}
    this.token();
  };
  updateField = (name, value) => {
    this.setState({ [name]: value });
  };
  logout = async navigation => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      navigation.navigate("Login");
    } catch (error) {}
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
  };
  getPlace = async () => {
    const { user, token } = this.state;
    const response = await getPlace(token, user.uid);
    this.setState({ places: response, markers: response.list });
  };
  savePlace = async place => {
    let { user, token } = this.state;
    let markers = Object.assign([], this.state.markers);

    markers = [...markers, place];
    this.setState({ markers });
    place.uid = user.uid;
    const response = await savePlace(token, place);
    console.log("savePlace :", response);
  };
  register = async navigation => {
    const { token, names, mail, pass } = this.state;
    const body = {
      names,
      mail,
      pass
    };
    const response = await register(token, body);
    if (response.id.registered === true && response.id.uid !== 0) {
      delete body.pass;
      this.setState({ user: { ...response.id, ...body } });
      this.goTo({ ...response.id, ...body }, navigation);
    } else {
      response.id.message;
    }
  };
  login = async navigation => {
    const { token, email, password } = this.state;
    // email: "test2@test.com",
    //   password: "12345678"
    isValidEmail(email) && email !== "" && console.log("");
    password && password !== "" && console.log("");

    const body = {
      email,
      password
    };
    const response = await login(token, body);
    if (response.uid !== 0) {
      this.setState({ user: response });
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
          updateField: this.updateField,
          getToken: this.token,
          register: this.register,
          login: this.login,
          logout: this.logout,
          savePlace: this.savePlace,
          getPlace: this.getPlace
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export default AppProvider;
export const AppConsumer = Consumer;
