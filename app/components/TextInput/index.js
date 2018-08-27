import React from "react";
import { View, TextInput } from "react-native";
import style from "../../styles";
const Input = ({ updateField, name, ...props }) => {
  return (
    <TextInput
      placeholderTextColor="#ffffff79"
      {...props}
      style={[style.textInput]}
      onChangeText={text => {
        updateField(name, text);
      }}
    />
  );
};

export default Input;
