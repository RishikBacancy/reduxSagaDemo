import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { GET_ALL_USER_INFO_REQUEST } from "../models/user/actions";

const mapStateToProps = ( state, props ) => {
    const { id, name, email } = state.user;

    return { id, name, email};
}

const mapDispatchToProps = ( dispatch, props ) => ({
    getAllUserinfo: () => {
        dispatch({
            type: GET_ALL_USER_INFO_REQUEST,
            payload: {}
        });
    }
});

const HomeScreenView = ({id, name, email, getAllUserinfo}) => {

    useEffect(()=>{
        getAllUserinfo();
    },[getAllUserinfo])

    return(
        <View>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const HomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenView);

export default HomeScreen;