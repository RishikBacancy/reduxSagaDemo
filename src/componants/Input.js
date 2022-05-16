import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Input = ({ label, textInputConfig, style }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.textInput} {...textInputConfig} />
		</View>
	);
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal:4,
        marginVertical:8,
    },
	label: {
		fontSize: 12,
		color: "black",
		marginBottom: 4
	},
    textInput:{
        backgroundColor: "#9daba1",
        color: "black",
        padding:6,
        borderRadius:7,
        fontSize:18,
    },
});

export default Input;
