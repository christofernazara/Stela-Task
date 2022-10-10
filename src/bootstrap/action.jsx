export const SET_TODOS = "SET_TODOS";
const setTodos = (payload) => {
    return {
      type: SET_TODOS,
      payload: payload,
    };
  };
 
  
  export { setTodos };