// SignUpScreen.js
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Email ID" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.linkText}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems: "center"},
    title: {fontSize: 24, fontWeight: "bold", marginBottom: 20},
    input: {width: "90%", borderWidth: 1, padding: 12, borderRadius: 5, marginBottom: 10},
    signUpButton: {backgroundColor: "orange", padding: 12, borderRadius: 5, marginBottom: 20, width: "90%", alignItems: "center"},
    buttonText: {color: "white", fontWeight: "bold"},
    linkText: {color: "orange", marginTop: 10},
});

export default SignUpScreen;
