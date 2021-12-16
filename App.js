import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/backgroundImage.jpg")}
                style={styles.backgroundSize}
            >
                <Header></Header>
                <Home></Home>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundSize: {
        width: "100%",
        height: "100%",
    },
});
