import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const Button = ({ onSelect, children }) => {
	return (
		<Pressable onPress={onSelect} style={({ pressed }) => pressed && styles.pressed}>
			<View style={styles.button}>
				<Text style={styles.text}>{children}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.75
	},
	button: {
		borderRadius: 5,
		padding: 8,
		backgroundColor: 'black'
	},
	text: {
		color: 'white',
		textAlign: 'center'
	}
});

export default Button;
