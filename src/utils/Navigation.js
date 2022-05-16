import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen from "../screens/SignupScreen";
import Dashboard from "../screens/Dashboard";
import LoginScreen from "../screens/LoginScreen";

const MainStack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Signup" component={SignupScreen}/>
                <MainStack.Screen name="Dashboard" component={Dashboard}/>
                <MainStack.Screen name="Login" component={LoginScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;