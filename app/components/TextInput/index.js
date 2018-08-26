import React from "react";
import { View, TextInput } from "react-native";
import style from "../../styles";
const Input = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#ffffff79"
      style={[style.textInput]}
      onChangeText={text => {}}
    />
  );
};

export default Input;
