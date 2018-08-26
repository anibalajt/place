import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";
// import PropTypes from "prop-types";
import style from "../../styles";
import TextInput from "../../components/TextInput";

{
  /* <Text style={{ color: "#fff" }}>Hola mundo soy login</Text> */
}
const Register = ({ navigation }) => {
  return (
    <View style={style.containerLogin}>
      <TextInput placeholder="Nombres y apellidos" />
      <TextInput
        placeholder="Correo Electrónico"
        keyboardType="email-address"
      />
      <TextInput placeholder="Contraseña" />
      <TouchableHighlight style={style.btn}>
        <Fragment>
          <Text style={style.textBtn}>Crear cuenta</Text>
        </Fragment>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={{ paddingTop: 100 }}
        onPress={e => navigation.goBack()}
      >
        <Fragment>
          <Text style={style.text}>iniciar sesión</Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

// Login.PropTypes = {};

export default Register;
