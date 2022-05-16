import axios from 'axios';
import { takeEvery, put, call, takeLatest, select } from 'redux-saga/effects';
import { API_URL } from '../../utils/config/url';
import {
	GET_ALL_USER_INFO_REQUEST,
	GET_ALL_USER_INFO_REQUEST_FAILURE,
	GET_ALL_USER_INFO_REQUEST_SUCCESS,
	SET_USER_LOG_OUT
} from './actions';

function* handler() {
	yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserinfo);
}

function* queryApi({ endpoint, method, body }) {
	const state = yield select();

	const res = yield call(makeRequest, {
		endpoint,
		body: body
	});

	//console.log(res.data);
	if (res.status === 200) {
		//console.log(res.data.data);

		return res;
	}
}

const makeRequest = async ({ endpoint, body }) => {
	return axios.post(API_URL + endpoint, body);
};

function* getAllUserinfo(action) {
	//console.log(action.request);
	try {
		if (action.request === 'logout') {
			yield put({
				type: SET_USER_LOG_OUT
			});

		} else {
			const post = yield call(queryApi, {
				endpoint: action.request,
				body: action.payload
			});

			//console.log(post);

			if (post.data.code === 0) {
				console.log(post.data);

				const detail = post.data.data;

				//console.log(detail);

				yield put({
					type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
					payload: {
						userName: detail.Name,
						userEmail: detail.Email,
						userToken: detail.Token
					}
				});

			}

			if (post.data.code === 1) {
				const detail = post.data.message;
				//console.log(detail);

				yield put({
					type: GET_ALL_USER_INFO_REQUEST_FAILURE,
					payload: detail
				});


			}
		}
	} catch (error) {
		console.log(error);
	}
}

export { handler };
