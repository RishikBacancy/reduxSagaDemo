import {
	GET_ALL_USER_INFO_REQUEST_FAILURE,
	GET_ALL_USER_INFO_REQUEST_SUCCESS,
	SET_USER_LOG_OUT
} from './actions';

const initialState = {
	userName: null,
	userEmail: null,
	userToken: null,
	registerd: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USER_INFO_REQUEST_SUCCESS:
			const { userName, userEmail, userToken } = action.payload;

			return { registerd: false, userName: userName, userEmail: userEmail, userToken: userToken };

		case GET_ALL_USER_INFO_REQUEST_FAILURE:
			return {
				registerd: true
			};

		case SET_USER_LOG_OUT:
			return {
				userName: null,
				userEmail:null,
				userToken: null,
				registerd: false
			}

		default:
			return state;
	}
};

export { reducer };
