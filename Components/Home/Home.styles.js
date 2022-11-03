import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: height,
    alignItems: "center",
    justifyContent: "space-evenly",
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
    backgroundColor: "rgba(0, 0, 0, .3)",
    borderRadius: 50,
    flexDirection: "row",
  },
  btnStyle: {
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50
    },
    btnFont: {
      fontSize: 14,
      fontWeight: "600",
      letterSpacing: .4
    },
  },
  upperLayer: {
    shadowColor: '#999',
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 300,
    borderRadius: 300 / 2
  },
  grantLayer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: 300,
    borderRadius: 300 / 2
  },
  parentLayer: {
    justifyContent: "center",
    alignItems: "center",
    height: 260,
    width: 260,
    backgroundColor: "#11233d",
    borderRadius: 260 / 2
  },
  childLayer: {
    height: 220,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderRadius: 110
  },
  time: {
    color: "#c7cbd1",
    fontSize: 50,
    letterSpacing: 2,
    marginBottom: 10
  },
  switchText: {
    color: "#c7cbd1",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
  }
})