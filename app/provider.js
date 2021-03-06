import React, { Component, createContext } from "react";
import { AsyncStorage } from "react-native";

import { isValidEmail } from "./utils";
import { getToken, login, register, savePlace, getPlace } from "./api";
const { Consumer, Provider } = createContext({});

class AppProvider extends Component {
  state = {
    user: null,
    markers: [],
    errorLogin: false,
    erroRegister: false,
    loading: false
  };

  componentDidMount = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        this.setState({ user });
      }
    } catch (error) {}
  };
  updateField = (name, value) => {
    this.setState({ [name]: value.toLowerCase() });
  };
  logout = async navigation => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      await getToken();
      navigation.replace("Login");
    } catch (error) {}
  };

  getPlace = async () => {
    let { user } = this.state;
    if (!user) {
      try {
        user = await AsyncStorage.getItem("user");
        if (user) {
          user = JSON.parse(user);
        }
      } catch (error) {}
    }
    const response = await getPlace(user.uid);
    this.setState({ markers: response.list });
  };
  savePlace = async place => {
    let { user } = this.state;
    let markers = Object.assign([], this.state.markers);

    place.uid = user.uid;
    const response = await savePlace(place);

    place.nid = response.id;
    markers = [...markers, place];
    this.setState({ markers });
  };
  register = async navigation => {
    this.setState({ loading: true });
    const { names, mail, cmail, cpass, pass } = this.state;
    const body = {
      names,
      mail,
      pass
    };
    if (!isValidEmail(mail) || !isValidEmail(cmail) || mail !== cmail) {
      this.setState({ erroRegister: "Email no coinciden", loading: false });
      return false;
    }
    if (cpass !== pass || cpass === "" || pass === "") {
      this.setState({
        erroRegister: "Contraseñas no coinciden",
        loading: false
      });
      return false;
    }
    if (pass.length < 8) {
      this.setState({
        erroRegister: "Contraseñas debe tener minimo 8 caracteres",
        loading: false
      });
      return false;
    }
    const response = await register(body);
    if (response.id.registered === true && response.id.uid !== 0) {
      delete body.pass;
      this.setState(
        { user: { ...response.id, ...body }, erroRegister: false },
        () => {
          this.goTo({ ...response.id, ...body }, navigation);
        }
      );
    } else {
      this.setState({
        erroRegister: response.id.message,
        loading: false
      });
    }
  };
  login = async navigation => {
    const { email, password } = this.state;
    this.setState({ loading: true });
    if (!isValidEmail(email)) {
      this.setState({ errorLogin: "Email incorrecto", loading: false });
      return false;
    }
    // email: "test2@test.com",
    // password: "12345678"
    const body = {
      email,
      password
    };
    const response = await login(body);
    console.log("response :", response);
    if (response.uid !== 0) {
      this.setState({ user: response, markers: [], errorLogin: false }, () => {
        this.goTo(response, navigation);
      });
    } else {
      this.setState({ errorLogin: response.message, loading: false });
    }
  };
  goTo = async (response, navigation) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(response));
      this.setState({ loading: false });
      navigation.replace("Home");
    } catch (error) {}
  };
  render() {
    return (
      <Provider
        value={{
          ...this.state,
          updateField: this.updateField,
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
