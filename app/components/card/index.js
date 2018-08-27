import React from "react";
import { View, Text, Image } from "react-native";
import style from "../../styles";
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const Card = ({ place }) => {
//   console.log("card  :", place);
  return (
    <View style={style.card}>
      <View style={[style.image, { backgroundColor: randomColor() }]} />
      <Text style={[style.text, { color: "#000", fontSize: 18 }]}>
        {place.title}
      </Text>
    </View>
  );
};

export default Card;
