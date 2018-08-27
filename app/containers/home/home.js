import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import style from "../../styles";
import Modal from "../../components/modalMarker";
import Card from "../../components/card";
import { getPlace } from "../../api";

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let id = 0;

class Home extends Component {
  state = {
    showModal: false,
    markers: [],
    openNav: false,
    coordinate: false
  };
  componentDidMount = async () => {
    this.props.getPlace();
  };
  showModal = e => {
    const { showModal } = this.state;
    console.log(e.nativeEvent);
    let coordinate = false;
    if (e.nativeEvent) {
      coordinate = e.nativeEvent.coordinate;
    }
    this.setState({
      showModal: !showModal,
      coordinate
    });
  };
  updateField = (name, value) => {
    let { coordinate } = this.state;
    coordinate[name] = value;
    this.setState({ coordinate });
  };
  onSave = () => {
    const { coordinate, showModal } = this.state;
    const { savePlace } = this.props;
    coordinate["type"] = "place";
    coordinate["field_image"] = [
      `data:image\/png;base64,iVBORw0KGgoAAAANSUhEU
    gAAABwAAAASCAMAAAB/2U7WAAAABlBMVEUAAAD//
    /+l2Z/dAAAASUlEQVR4XqWQUQoAIAxC2/0vXZDrEX4IJ
    TRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r8
    a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5
    ErkJggg==`
    ];
    coordinate["lat"] = coordinate.latitude;
    coordinate["lon"] = coordinate.longitude;

    savePlace(Object.assign({}, coordinate));
    this.setState({
      coordinate: false,
      showModal: !showModal
    });
  };
  openNav = openNav => {
    this.setState({ openNav: !openNav });
  };
  render() {
    const { logout, navigation, getPlace, markers } = this.props;
    const { showModal, openNav, showPlaces } = this.state;

    return (
      <View style={style.containerMap}>
        <MapView style={style.map} onPress={e => this.showModal(e)}>
          {markers &&
            markers.length > 0 &&
            markers.map((marker, key) => {
              return (
                <Marker
                  key={key}
                  coordinate={{
                    latitude: Number(marker.lat),
                    longitude: Number(marker.lon)
                  }}
                  // pinColor={randomColor()}
                />
              );
            })}
        </MapView>
        {showModal && (
          <Modal
            showModal={this.showModal}
            onSave={this.onSave}
            updateField={this.updateField}
          />
        )}
        <View style={style.buttonContainer}>
          {openNav && (
            <Fragment>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showPlaces: !showPlaces });
                  this.openNav(openNav);
                  getPlace();
                }}
                style={style.bubble}
              >
                <Fragment>
                  <Text>Mis Lugares</Text>
                </Fragment>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => logout(navigation)}
                style={style.bubble}
              >
                <Fragment>
                  <Text>Cerrar Sesión</Text>
                </Fragment>
              </TouchableOpacity>
            </Fragment>
          )}
          <TouchableOpacity
            onPress={() => this.openNav(openNav)}
            style={style.bubble}
          >
            {!openNav && (
              <Image
                source={require("../../assets/burger.png")}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              />
            )}
            {openNav && (
              <Fragment>
                <Text
                  style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}
                >
                  ✕
                </Text>
              </Fragment>
            )}
          </TouchableOpacity>
        </View>
        {showPlaces &&
          markers &&
          markers.length > 0 && (
            <View style={{ height: 130, paddingHorizontal: 10 }}>
              <ScrollView horizontal={true}>
                {markers.map((place, key) => (
                  <Card key={key} place={place} />
                ))}
              </ScrollView>
            </View>
          )}
      </View>
    );
  }
}

export default Home;
