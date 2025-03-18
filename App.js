import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {AppProvider, AppContext} from "./context/AppContext";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/MainStack";

const AppNavigator = () => {
    const {isLoggedIn} = useContext(AppContext);

    return <NavigationContainer>{isLoggedIn ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default function App() {
    return (
        <AppProvider>
            <AppNavigator />
        </AppProvider>
    );
}
