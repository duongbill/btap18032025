import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { AppContext } from "../context/AppContext";

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {/* Banner từ thư mục assets */}
      <Image source={require("../assets/banner.jpg")} style={styles.banner} />

      {/* Thông tin người dùng */}
      <Text style={styles.title}>Nguyen Hai Duong</Text>
      <Text style={styles.subtitle}>Mobile Developer</Text>

      {/* Description */}
      <Text style={styles.description}>
        Hi Iam Bill. This is where I share basic information about myself and my
        life.
      </Text>

      {/* Nút Sign Out */}
      <View style={styles.buttonContainer}>
        <Button
          title="Sign Out"
          color="Yellow"
          onPress={() => setIsLoggedIn(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#f5f5f5" },
  banner: {
    width: "100%",
    height: 120,
    resizeMode: "cover", // Giữ tỷ lệ ảnh và lấp đầy
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "blue", marginBottom: 10 },
  description: {
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#333",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "50%",
    borderRadius: 5,
  },
});

export default ProfileScreen;
