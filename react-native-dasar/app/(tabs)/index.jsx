// rnfe
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import backgroudImage from "@/assets/images/iced-coffee.png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={backgroudImage}>
        <Text style={styles.text}>Coffe Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent:"center",
  },
  text:{
    color:"white",
    fontSize:42,
    backgroundColor:"rgba(0,0,0,0.5)",
    fontWeight:"bold",
    textAlign:"center",
    padding:5
  }
});
