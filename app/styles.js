import { Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191f27",
    padding: 20
  },
  containerMap: {
    flex: 1,
    justifyContent: "flex-end"
  },
  containerLogin: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#191f27",
    paddingBottom: 40,
    paddingHorizontal: 50
  },
  //input
  textInput: {
    height: 40,
    backgroundColor: "#ffffff59",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  // btn
  btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303030"
  },
  //text
  textBtn: {
    color: "#fff",
    fontSize: 16
  },
  text: {
    textAlign: "center",
    color: "#ffffff59",
    fontSize: 14
  },

  contentModal: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    elevation: 1,
    zIndex: 1
  },
  modal: {
    width: width - 40,
    minHeight: height / 2,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 18,
    borderRadius: 10
  },
  row: {
    flexDirection: "row"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    elevation: 0,
    zIndex: 0
  },
  bubble: {
    minWidth: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 15
  },

  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // flexDirection: "row",
    marginBottom: 20,
    marginRight: 20
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    width: width - 80,
    height: 120
  },
  image: {
    marginRight: 15,
    width: 110,
    height: 120,
    resizeMode: "cover"
  }
});
