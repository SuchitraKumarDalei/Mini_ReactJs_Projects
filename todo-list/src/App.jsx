import { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import TodoItem from "./components/todo-item";
import TodoDetail from "./components/todo-details/main";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [todoDetails,setTodoDetails] = useState(null);
  const [openDialog,setOpenDialog] = useState(false);

  async function fetchDetailOfCurrTodo(currTodoId) {

    try {

      const apiResponse = await fetch(`https://dummyjson.com/todos/${currTodoId}`);
      const result = apiResponse.json();

      if (result) {
        setTodoDetails(result);
        setOpenDialog(true);
      } else {
        
        setTodoDetails(null);
        setOpenDialog(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchTodoList() {

    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      // console.log(result);

      if (result?.todos) {
        setTodoList(result?.todos);
        setLoading(false);
      } else {
        setLoading(false);
        setTodoList([]);
        setErrMsg('');
      }
    } catch (e) {
      console.log(e);
      setErrMsg('Some error occured!!');
    }
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <div className="minWrapper">
      <h1>Simple Todo app using material UI</h1>
      <div>
        {
          loading ? <h2>Taking U into......</h2>
            : todoList && todoList.length > 0 ?
              todoList.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem} fetchDetailOfCurrTodo={fetchDetailOfCurrTodo}/>) :
              null
        }
      </div>
      <TodoDetail todoDetails={todoDetails} openDialog={openDialog} setOpenDialog={setOpenDialog}  setTodoDetails={setTodoDetails}/>
    </div>

  );
}

export default App
