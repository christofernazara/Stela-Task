import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducer";
import  bootstrapSaga  from "./sagas";
import reducer from "./reducer";
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(bootstrapSaga);
    const store = createStore(reducer)
export default store

