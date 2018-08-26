import { Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191f27",
    padding: 20
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
  }
});
