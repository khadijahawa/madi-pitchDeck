import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 14,
    // paddingVertical: 32,
    backgroundColor: "#ffff"
    // paddingTop: 6,
    // marginHorizontal: 6,
    // height: "100%",
    // width: "100%"
  },
  infoText: {
    alignItems: "center",

    padding: 3,
    margin: 3
  },
  info: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    alignItems: "center",
    margin: 3
  },
  Text: {
    color: "#717171",
    fontSize: 12,
    // marginRight: 3,
    margin: 2
  },
  digitalIdText: {
    color: "#717171"
  },
  Image: {
    width: "100%"
  },
  customText: {
    color: "#151513",
    // fontFamily: "LexendBold",
    letterSpacing: 0.5,
    fontSize: 14
  },
  modalContent: {
    backgroundColor: "#545454",
    padding: 22,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    width: "58%",
    height: "15%"
  },
  textModal: {
    color: "#FFFFFF",
    margin: 3,
    padding: 6
  },
  lineStyle: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    // width: "100%",
    // height: "8%",
    borderBottomWidth: 0.8
  },
  HomeButtonSection: {
    marginTop: 6,
    width: "100%",
    marginRight: 3
  },
  HomeButton: {
    alignItems: "center",
    padding: 16,
    width: "100%",
    backgroundColor: "#EFEFEF",
    margin: 6,
    marginLeft: 2,
    borderRadius: 6
  },
  HomeButtonText: {
    color: "#151513"
  },

  adressSection: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    height: 400,
    padding: 10
  },

  map: {
    // ...StyleSheet.absoluteFillObject,
    height: 270,
    margin: 5,
    // position: "relative"
    position: "absolute",
    top: 60,
    bottom: 0,
    left: 15,
    right: 15
  }
});

export default styles;
