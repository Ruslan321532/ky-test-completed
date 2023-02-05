import "./App.css";
import ky from "ky";


const api = ky.create({
  prefixUrl:"https://jsonplaceholder.typicode.com"
})

async function getAllTodos() {
  try {
    const todos = await ky
      .get("todos", {prefixUrl:"https://jsonplaceholder.typicode.com", hooks:{}})
      .json();
    console.log(todos);
  } catch (err) {
    console.log(err.mesage);
  }
}
// async function getAllTodos() {
//   try {
//     const todos = await api.get("todos").json();
//     console.log(todos)
//   }.catch(err) {
//     console.log(err.mesage)
//   }
// }

async function addTodo() {
  const newTodo ={title:"hello", completed: false, userid:2}

  try {
    const todos = await ky
      .post("https://jsonplaceholder.typicode.com/todos", {json: newTodo})
      .json();
    console.log(todos);
  } catch (err) {
    console.log(err.mesage);
  }
}

export default function App() {
  return (
    <div className="App">
      <h2>стяни данные</h2>
      <button onClick={getAllTodos}>get todos</button>
      <button onClick={addTodo}> add todo</button>
    </div>
  );
}
