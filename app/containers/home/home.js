import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={{}} />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
