import React, { useState } from "react";
import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import List from "./List";
import SideBar from "./SideBar";

function App() {
  const [todos, setTodos] = useState([]);

  // const addToDo = ({todoText}) => {
  //   if (todos.length >= 3) {
  //     alert("Molimo vas da se prijavite da biste dodali više od 3 zadatka!");
  //   } else {
  //     setTodos((prev) => [
  //       ...prev,
  //       {
  //         id: prev.length + 1,
  //         text: todoText,
  //         isCompleted: false,
  //       },
  //     ]);
  //   }
  // };

  const addTodo = (todoText) => {
    if (todos.length >= 3) {
      alert("lOGIN IF YOU WANT TO ADD MORE THAN 3 TODOS");
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const deleteTodo=(id)=>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[872px] h-[590px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />
        <List todos={todos} setTodos={setTodos} />
        <SideBar todos={todos} setTodos={setTodos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
