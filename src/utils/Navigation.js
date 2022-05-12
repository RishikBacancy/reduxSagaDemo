import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

const MainStack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Home" component={HomeScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;