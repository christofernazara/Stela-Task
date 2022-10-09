export const SET_TODOS = "SET_TODOS";
export const TODOS_FETCH_SUCCEEDED = "TODOS_FETCH_SUCCEEDED"
export const TODOS_FETCH_FAILED = "TODOS_FETCH_FAILED"
const setTodos = (payload) => {
    return {
      type: SET_TODOS,
      payload: payload,
    };
  };
  const setTodosSuccess  = (payload) => {
    return{
    type : TODOS_FETCH_SUCCEEDED,
    payload : payload
    }
  }
  const setTodosFailed = (error) =>{
    return{
      type : TODOS_FETCH_FAILED,
      payload : error
    }
  }
  
  export { setTodos , setTodosSuccess, setTodosFailed};