import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/mySagas";
// const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  // initialState,
  composeEnhancer(applyMiddleware(thunk,sagaMiddleware)),
);
sagaMiddleware.run(mySaga);
export default store;
