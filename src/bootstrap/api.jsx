import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

const getTodoApi = () => api.get("/todos?_start=0&_limit=20");

export default getTodoApi
