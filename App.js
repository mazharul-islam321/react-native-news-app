import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import LogIn from "./components/authentication/LogIn/LogIn";
import SignUp from "./components/authentication/SignUp/SignUp";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/backgroundImage.jpg")}
                style={styles.backgroundSize}
            >
                <NativeRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/signin" element={<LogIn></LogIn>}></Route>
                        <Route
                            path="/signup"
                            element={<SignUp></SignUp>}
                        ></Route>
                    </Routes>
                </NativeRouter>
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
