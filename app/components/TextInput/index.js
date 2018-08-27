import React from "react";
import { View, TextInput } from "react-native";
import style from "../../styles";
const Input = ({ updateField, name, styleCustom, ...props }) => {
  return (
    <TextInput
      placeholderTextColor="#ffffff79"
      {...props}
      style={[style.textInput, styleCustom]}
      onChangeText={text => {
        updateField(name, text);
      }}
    />
  );
};

export default Input;
