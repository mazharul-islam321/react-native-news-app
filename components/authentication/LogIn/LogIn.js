import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "react-router-native";

export default function LogIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>
            <View style={styles.emailContainer}>
                <View>
                    <Text style={styles.emailText}>Email</Text>
                    <TextInput
                        placeholder="your email"
                        style={styles.emailInput}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.emailText}>password</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="your password"
                        style={styles.emailInput}
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
                <View style={styles.signupStyle}>
                    <Link to="/signup">
                        <Text>New User? Please Sign Up</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        textAlign: "center",
    },
    emailContainer: {
        marginTop: 100,
    },
    emailText: {
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 5,
    },
    emailInput: {
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderBottomColor: "black",
    },
    signInText: {
        textAlign: "center",
        marginTop: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        fontWeight: "bold",
    },
    signupStyle: {
        marginTop: 30,
        alignItems: "center",
    },
});
