import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import "./App.css";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoPage />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
