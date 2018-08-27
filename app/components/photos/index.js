import React, { Component } from "react";
import { View, CameraRoll, Text } from "react-native";
class Photos extends Component {
  state = { photos: [] };
  getPhotos = async () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    }).then(r => {
      console.log("r.edges :", r.edges);
      this.setState({ photos: r.edges });
    });
  };

  render() {
    return (
      <View>
        <Text
          style={{ fontSize: 30 }}
          onPress={e => {
            this.getPhotos();
          }}
        >
          aqui
        </Text>
      </View>
    );
  }
}

export default Photos;
