import React from "react";
import { View, ActivityIndicator } from "react-native";
import style from "../../styles";
const Loading = () => {
  return (
    <View style={style.loading}>
      <ActivityIndicator size="large" color="#f5dc56" />
    </View>
  );
};

export default Loading;
