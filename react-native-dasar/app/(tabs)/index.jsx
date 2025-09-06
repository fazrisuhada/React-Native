// rnfe
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import backgroudImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={backgroudImage}>
        <Text style={styles.text}>Coffe Shop</Text>

        <Link href={"/contact"} style={{marginHorizontal:"auto"}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
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
  },
  button:{
    backgroundColor:"rgba(0,0,0,0.75)",
    height: 60,
    padding:10,
    borderRadius: 20,
    justifyContent: "center",
    marginTop:10
  },
  buttonText: {
    color:"white",
    fontSize: 18,
    fontWeight:"bold",
    textAlign:"center",
    padding:5
  }
});
