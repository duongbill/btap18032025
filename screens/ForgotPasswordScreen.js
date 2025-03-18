import React from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

const ForgotPasswordScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />

            <TouchableOpacity style={styles.resetButton}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.linkText}>Back to Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center"},
    title: {fontSize: 24, fontWeight: "bold", marginBottom: 20},
    input: {width: "90%", borderWidth: 1, padding: 12, borderRadius: 5, marginBottom: 10},
    resetButton: {backgroundColor: "orange", padding: 12, borderRadius: 5, marginBottom: 20, width: "90%", alignItems: "center"},
    buttonText: {color: "white", fontWeight: "bold"},
    linkText: {color: "orange", marginTop: 10},
});

export default ForgotPasswordScreen;
