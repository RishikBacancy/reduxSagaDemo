import { GET_ALL_USER_INFO_REQUEST_SUCCESS } from './actions';

const initialState = {
	id: 23,
	name: 'rishik',
	email: 'r@gmail.com'
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USER_INFO_REQUEST_SUCCESS:
			const { id, name, email } = action.payload;
			return {
				id,
				name,
				email
			};

		default:
			return state;
	}
};

export { reducer };
