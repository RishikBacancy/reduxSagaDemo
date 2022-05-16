import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Input from '../componants/Input';
import Button from '../componants/Button';
import { connect } from 'react-redux';
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
			request: 'login'
		});
	}
});

const LoginScreenView = ({ navigation, userName, userEmail, userToken, registerd, getAllUserinfo }) => {
	const [ input, setInput ] = useState({
		email: '',
		password: ''
	});

	const inputHandler = (inputidentifier, enteredData) => {
		setInput((curData) => {
			return {
				...curData,
				[inputidentifier]: enteredData
			};
		});
	};

	const loginHandler = () => {
		//console.log(input);
		getAllUserinfo(input);

		// setTimeout(()=>{
		// 	navigation.navigate("Dashboard")
		// },100)
		navigation.navigate("Dashboard")

		setInput({
			email:"",
			password:""
		})
	};

	return (
		<View style={styles.container}>
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

			<Button onSelect={loginHandler}>Log In</Button>

			<Pressable
				style={styles.simpleText}
				onPress={() => {
					navigation.replace('Signup');
				}}
			>
				<Text>New User ? Sign up</Text>
			</Pressable>

		</View>
	);
};

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenView);

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

export default LoginScreen;
