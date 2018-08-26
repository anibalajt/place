import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import style from "../../styles";
import TextInput from "../../components/TextInput";

{
  /* <Text style={{ color: "#fff" }}>Hola mundo soy login</Text> */
}
const Login = ({ navigation }) => {
  return (
    <View style={style.containerLogin}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <TouchableHighlight style={style.btn}>
        <Fragment>
          <Text style={style.textBtn}>iniciar sesión</Text>
        </Fragment>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        style={{ paddingTop: 100 }}
        onPress={e => navigation.navigate("Register")}
      >
        <Fragment>
          <Text style={style.text}>
            No tienes una cuenta?{" "}
            <Text style={{ fontWeight: "bold" }}>Crea una</Text>
          </Text>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

Login.PropTypes = {};

export default Login;
