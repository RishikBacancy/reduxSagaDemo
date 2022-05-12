import { takeEvery, put } from 'redux-saga/effects';
import { GET_ALL_USER_INFO_REQUEST, GET_ALL_USER_INFO_REQUEST_SUCCESS } from './actions';

function* handler() {
	yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserinfo);
}

function* getAllUserinfo(action) {
	console.log(action);

	try {
		yield put({
			type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
			payload: {
				id: 35,
				name: 'mijoli',
				email: 'm@gmail.com'
			}
		});
	} catch (error) {}
}

export { handler };
