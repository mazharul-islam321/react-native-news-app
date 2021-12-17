import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.navbarStyle}>
            <View style={styles.navbarStylein}>
                <Text style={styles.icon}>NEWS</Text>
                <TextInput
                    placeholder="search your country"
                    style={styles.headerSearch}
                ></TextInput>
                <Text>Sign In</Text>
                {/* <Text>SignOut</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarStyle: {
        paddingBottom: 10,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    navbarStylein: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: 15,
        fontWeight: "bold",
    },
    headerSearch: {
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "rgba(235, 235, 235, .7)",
    },
});
