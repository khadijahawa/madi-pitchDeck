import { StyleSheet } from "react-native";
import fonts from "../utilities/Fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: "center",
    paddingTop: 2,
  },
  infoText: {
    alignItems: "center",

    padding: 3,
    margin: 3,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    margin: 3,
  },
  Text: {
    color: "#717171",
    fontSize: 12,
    marginRight: 3,
  },
  digitalIdText: {
    color: "#717171",
  },
  homeImage: {
    width: "100%",
  },
  customText: {
    color: "#151513",
    fontFamily: fonts["Lexend-Light"],
  },
  modalContent: {
    backgroundColor: "#545454",
    padding: 22,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    width: "58%",
    height: "15%",
  },
  textModal: {
    color: "#FFFFFF",
    margin: 3,
    padding: 6,
  },
});

export default styles;
