import React, { Fragment } from "react";
import { ScrollView, View, Text, TouchableHighlight } from "react-native";
// import PropTypes from "prop-types";
import style from "../../styles";
import TextInput from "../../components/TextInput";

const Register = ({ navigation, register, erroRegister, updateField }) => {
  return (
    <View style={style.containerLogin}>
      <TextInput
        name="names"
        placeholder="Nombres y apellidos"
        updateField={updateField}
      />
      <TextInput
        name="mail"
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        updateField={updateField}
      />
      <TextInput
        name="cmail"
        placeholder="Confirmar correo Electrónico"
        keyboardType="email-address"
        updateField={updateField}
      />
      <TextInput
        name="pass"
        placeholder="Contraseña"
        updateField={updateField}
      />
      <TextInput
        name="cpass"
        placeholder="Confirmar contraseña"
        updateField={updateField}
      />
      <TouchableHighlight style={style.btn} onPress={e => register(navigation)}>
        <Fragment>
          <Text style={style.textBtn}>Crear cuenta</Text>
        </Fragment>
      </TouchableHighlight>
      <Text style={style.error}>{erroRegister}</Text>
      <TouchableHighlight
        underlayColor="transparent"
        style={{ marginTop: 100 }}
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
