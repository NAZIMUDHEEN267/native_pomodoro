import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('screen');
 
export default StyleSheet.create({
  container: {
    height: height,
    alignItems: "center",
    justifyContent: "space-around",
    background: "yellow",
  },
  headline: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  nav: {
    width: "90%",
    height: 80,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  btnFont: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    letterSpacing: .4
  }
})