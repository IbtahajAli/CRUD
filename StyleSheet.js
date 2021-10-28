import React from "react";
import { StyleSheet } from "react-native";
export const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // flexDirection: "row-reverse",
    // justifyContent: "center",
    // alignItems: "center",
    justifyContent: "center",
    // justifyContent: "space-between",
    // alignContent: "center",
    alignItems: "center",
  },

  TextContainer: {
    // top: "60%",
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 1,
    // justifyContent: "center",

    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "flex-end",

    // justifyContent: "center",
    flexDirection: "row-reverse",
  },
  TextBox: {
    // top: "50%",
    borderColor: "cyan",
    borderWidth: 4,
    textAlign: "center",
    height: 50,
    width: "90%",
    left: "5%",
  },
  TextButton: {
    // borderWidth: 3,
    top: "10%",
    // padding: 10,
  },
  FirstBox: {
    width: 70,
    height: 50,
    backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
  },
  textAlign: {
    top: 10,
    textAlign: "center",
  },
  SecondBox: {
    width: 70,
    height: 50,
    backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
  },
  ThirdBox: {
    width: 70,
    height: 50,
    backgroundColor: "green",
    alignContent: "center",
    alignItems: "center",
  },
});
