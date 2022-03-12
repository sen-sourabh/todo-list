import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("I'm on Delete for ", todo);
  };

  let todos = [
    {
      id: 1,
      title: "Go to the market",
      description: "you need to go to the market to get this job done.",
    },
    {
      id: 2,
      title: "Go to the ghat",
      description: "you need to go to the market to get this job done.",
    },
    {
      id: 3,
      title: "Go to the home",
      description: "you need to go to the market to get this job done.",
    },
    {
      id: 4,
      title: "Go to the City",
      description: "you need to go to the market to get this job done.",
    },
  ];
  return (
    <div>
      <Header title="Todo List" searchBar={false}></Header>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </div>
  );
}

export default App;
