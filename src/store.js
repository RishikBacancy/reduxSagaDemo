import { legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { reducer } from "./models/root-reducer";
import { handler as userSaga } from "./models/user/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;