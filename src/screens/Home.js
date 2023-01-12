import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import styles from "./Styles";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function handleClick() {
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.infoText}>
        <Text style={styles.digitalIdText}>
          This is your digital ID: 12435433
        </Text>
      </View>
      <View>
        <Image
          source={require("../../assets/Home.png")}
          style={styles.homeImage}
        />
      </View>
      <View style={styles.infoText}>
        <View style={styles.info}>
          <Text style={styles.Text}>This product is authenticated</Text>

          <TouchableOpacity onPress={handleClick}>
            <Image
              source={require("../../assets/info.svg")}
              style={{ backgroundColor: "red" }}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View
              style={[
                styles.modalContent,
                { position: "absolute", top: "56%", left: "40%" },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Image
                  source={require("../../assets/cancel.svg")}
                  style={{
                    fill: "white",
                    color: "white",
                    backgroundColor: "white",
                  }}
                />
                <Text style={styles.textModal}>
                  This product is authenticated by MĀDI.
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <Text style={styles.customText}>Light Beige Turtleneck Sweater </Text>
      </View>
    </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffff",
//     // alignItems: "center",
//     paddingTop: 2,
//   },
//   infoText: {
//     alignItems: "center",

//     padding: 3,
//     margin: 3,
//   },
//   info: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     alignItems: "center",
//     margin: 3,
//   },
//   Text: {
//     color: "#717171",
//     fontSize: 12,
//     marginRight: 3,
//   },
//   digitalIdText: {
//     color: "#717171",
//   },
//   homeImage: {
//     width: "100%",
//   },
//   customText: {
//     color: "#151513",
//     fontFamily: "Lexend",
//   },
//   modalContent: {
//     backgroundColor: "#545454",
//     padding: 22,
//     justifyContent: "center",
//     alignItems: "flex-start",
//     borderRadius: 10,
//     width: "58%",
//     height: "15%",
//   },
//   textModal: {
//     color: "#FFFFFF",
//     margin: 3,
//     padding: 6,
//   },
// });
