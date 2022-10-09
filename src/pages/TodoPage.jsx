import React from "react";
import Todolist from "../components/Todolist";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "../bootstrap/action";
import  getTodoApi  from "../bootstrap/api";
function TodoPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodoApi()
      .then((res) => dispatch(setTodos(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Todolist />
    </>
  );
}

export default TodoPage;
