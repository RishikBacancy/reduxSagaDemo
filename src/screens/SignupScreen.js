import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { connect } from 'react-redux';
import Button from '../componants/Button';
import Input from '../componants/Input';
import { GET_ALL_USER_INFO_REQUEST } from '../models/user/actions';

const mapStateToProps = (state, props) => {
	const { userName, userEmail, userToken, registerd } = state.user;

	console.log(state.user);

	return { userName, userEmail, userToken, registerd };
};

const mapDispatchToProps = (dispatch, props) => ({
	getAllUserinfo: (input) => {
		dispatch({
			type: GET_ALL_USER_INFO_REQUEST,
			payload: input,
			request: 'registration'
		});
	}
});

const SignupScreenView = ({ navigation, getAllUserinfo }) => {
	const [ input, setInput ] = useState({
		name: '',
		email: '',
		password: ''
	});

	//console.log(registerd);

	const inputHandler = (inputidentifier, enteredData) => {
		setInput((curData) => {
			return {
				...curData,
				[inputidentifier]: enteredData
			};
		});
	};

	const signuphandler = () => {
		//console.log(input);
		getAllUserinfo(input);
		navigation.replace("Login");

		setInput({
			name:"",
			email:"",
			password:""
		})
		
	};

	return (
		<View style={styles.container}>
			<Input
				label="Name"
				textInputConfig={{
					autoCapitalize: 'none',
					onChangeText: inputHandler.bind(this, 'name')
				}}
			/>

			<Input
				label="Email"
				textInputConfig={{
					autoCapitalize: 'none',
					onChangeText: inputHandler.bind(this, 'email')
				}}
			/>

			<Input
				label="Password"
				textInputConfig={{
					autoCapitalize: 'none',
					onChangeText: inputHandler.bind(this, 'password'),
					secureTextEntry: true
				}}
			/>

			<Button onSelect={signuphandler}>Sign Up</Button>

			<Pressable style={styles.simpleText} onPress={() => {navigation.replace('Login')}}>
				<Text>Already have an account? Log In</Text>
			</Pressable>

		</View>
	);
};

const SignupScreen = connect(mapStateToProps, mapDispatchToProps)(SignupScreenView);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24
	},
	simpleText: {
		alignSelf: 'flex-end'
	},
	input: {
		backgroundColor: '#9daba1',
		borderBottomColor: '#383b38',
		borderBottomWidth: 2,
		fontSize: 16,
		marginVertical: 8,
		paddingVertical: 8,
		paddingHorizontal: 4
	},
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	boldTitle: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold'
	},
	focusText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black'
	}
});

export default SignupScreen;
