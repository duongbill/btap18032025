import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Hàm lưu trạng thái đăng nhập vào AsyncStorage
  const saveLoginState = async (value) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
      setIsLoggedIn(value);
    } catch (error) {
      console.error("Lỗi lưu trạng thái:", error);
    }
  };

  // Hàm lấy trạng thái đăng nhập khi mở app
  const loadLoginState = async () => {
    try {
      const value = await AsyncStorage.getItem("isLoggedIn");
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value));
      }
    } catch (error) {
      console.error("Lỗi lấy trạng thái:", error);
    }
  };

  // Chạy khi app khởi động
  useEffect(() => {
    loadLoginState();
  }, []);

  return (
    <View>
      <Text>{isLoggedIn ? "Đã đăng nhập" : "Chưa đăng nhập"}</Text>
      <Button title="Đăng nhập" onPress={() => saveLoginState(true)} />
      <Button title="Đăng xuất" onPress={() => saveLoginState(false)} />
    </View>
  );
};

export default App;
