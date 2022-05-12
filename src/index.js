import React from "react";
import { View, StyleSheet } from "react-native";
import Navigation from "./utils/Navigation";

const Root = () =>{
    return(
        <View style={styles.screen}>
            <Navigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1
    }
})

export default Root;