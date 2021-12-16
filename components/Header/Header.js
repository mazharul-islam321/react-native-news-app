import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.navbarStyle}>
            <Text style={styles.icon}>NEWS</Text>
            <TextInput
                placeholder="search your country"
                style={styles.headerSearch}
            ></TextInput>
            <Text>Sign In</Text>
            {/* <Text>SignOut</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    navbarStyle: {
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
    },
});
