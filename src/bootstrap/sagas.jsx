import { delay, put, takeEvery } from "redux-saga/effects";

function* setTodos() {
  yield delay(1000);
  yield put({type : 'SET_TODOS_ASYNC',payload :[]});
}
export function* sagas(){
  yield takeEvery("SET_TODOS", setTodos)
}