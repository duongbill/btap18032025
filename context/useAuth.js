import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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
    loadLoginState();
  }, []);

  const saveLoginState = async (value) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(value));
      setIsLoggedIn(value);
    } catch (error) {
      console.error("Lỗi lưu trạng thái:", error);
    }
  };

  return { isLoggedIn, saveLoginState };
};

export default useAuth;
