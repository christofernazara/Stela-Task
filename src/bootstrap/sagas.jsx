import { all,call, delay, put, takeLatest } from "redux-saga/effects";
import * as API from "./api";
import * as ACTION from "./action";

function* setTodos() {
  try {
    const response = yield call(API.getTodoApi);
    yield delay(2000)
    yield put(ACTION.TODOS_FETCH_SUCCEEDED(response?.data));
  } catch (error) {
    yield put(ACTION.TODOS_FETCH_FAILED(error.response?.data))
  }
}
const bootstrap = [takeLatest(ACTION.SET_TODOS, setTodos)];

function* bootstrapSaga(){
    yield all([...bootstrap])
}
export default bootstrapSaga
