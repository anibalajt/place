import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import style from "../../styles";
import TextInput from "../../components/TextInput";

// navigation.navigate("Register")
const Login = ({ navigation, getToken, register, login }) => {
  return (
    <View style={style.containerLogin}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TouchableHighlight
        underlayColor="transparent"
        style={style.btn}
        onPress={e => {
            login();
        }}
      >
        <Fragment>
          <Text style={style.textBtn}>iniciar sesión</Text>
        </Fragment>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={{ marginTop: 100 }}
        onPress={e => getToken()}
      >
        <Fragment>
          <Text style={style.text}>
            No tienes una cuenta?{" "}
            <Text style={{ fontWeight: "bold" }}>Crea una token</Text>
          </Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

Login.PropTypes = {};

export default Login;
