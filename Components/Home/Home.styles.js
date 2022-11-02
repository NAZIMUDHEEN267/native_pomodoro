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

  }
})