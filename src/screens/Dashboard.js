import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from '../componants/Button';
import { GET_ALL_USER_INFO_REQUEST } from '../models/user/actions';

const mapStateToProps = (state, props) => {
	const { userName, userEmail, userToken } = state.user;

	return { userName, userEmail, userToken };
};

const mapDispatchToProps = (dispatch, props) => ({
	getAllUserinfo: () => {
		dispatch({
			type: GET_ALL_USER_INFO_REQUEST,
			request: 'logout'
		});
	}
});

const DashboardView = ({ userName, userEmail, userToken, getAllUserinfo, navigation }) => {

	const logoutHandler = () => {
		getAllUserinfo();
		
		navigation.navigate("Login")
	};

	return (
		<View style={styles.screen}>
			<Text style={styles.boldTitle}>
				Hey! <Text style={styles.focusText}>{userName}</Text>
			</Text>
			<Text>
				your email address is <Text style={styles.focusText}>{userEmail}</Text>
			</Text>
			<Text>and your token is</Text>
			<Text style={styles.focusText}>{userToken}</Text>

			<Button onSelect={logoutHandler}>Log Out</Button>
		</View>
	);
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardView);

const styles = StyleSheet.create({
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

export default Dashboard;
