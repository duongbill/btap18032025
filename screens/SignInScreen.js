import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AppContext } from "../context/AppContext";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icon

const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AppContext);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput style={styles.input} placeholder="Email ID" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.forgotPasswordContainer}
      >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      {/* Social Login Buttons */}
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="red" style={styles.icon} />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Icon name="facebook" size={20} color="white" style={styles.icon} />
          <Text style={styles.facebookText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <View style={styles.signUpContainer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "90%",
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
    marginRight: 30,
  },
  forgotPassword: {
    color: "red",
    fontWeight: "bold",
  },

  signInButton: {
    width: "90%",
    backgroundColor: "black",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  signInText: { color: "white", fontWeight: "bold" },

  orText: { marginVertical: 10, fontSize: 14, fontWeight: "bold" },

  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  googleButton: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 5,
  },
  facebookButton: {
    backgroundColor: "blue",
    padding: 10,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
  facebookText: { color: "white", fontWeight: "bold" },
  googleText: { color: "black", fontWeight: "bold" },

  signUpContainer: { flexDirection: "row", marginTop: 20 },
  signUpText: { color: "red", fontWeight: "bold" },
});

export default SignInScreen;
