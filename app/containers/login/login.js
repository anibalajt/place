import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";
// import PropTypes from "prop-types";
import style from "../../styles";
import TextInput from "../../components/TextInput";

// navigation.navigate("Register")
const Login = ({ navigation, login, updateField, errorLogin }) => {
  return (
    <View style={style.containerLogin}>
      <TextInput
        name="email"
        keyboardType="email-address"
        placeholder="Correo Electrónico"
        updateField={updateField}
      />
      <TextInput
        name="password"
        placeholder="Contraseña"
        updateField={updateField}
      />
      <TouchableHighlight
        underlayColor="transparent"
        style={style.btn}
        onPress={e => {
          login(navigation);
        }}
      >
        <Fragment>
          <Text style={style.textBtn}>iniciar sesión</Text>
        </Fragment>
      </TouchableHighlight>
      <Text style={style.error}>{errorLogin}</Text>
      <TouchableHighlight
        underlayColor="transparent"
        style={{ marginTop: 100 }}
        onPress={e => navigation.navigate("Register")}
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

export default Login;
