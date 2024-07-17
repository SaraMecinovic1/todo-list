import React, { useState } from "react";
import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import List from "./List";
import SideBar from "./SideBar";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText) => {
    if (todos.length >= 3) {
      alert("Login if you want to add more than 3 todos");
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

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[872px] h-[590px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />
        <List todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <SideBar todos={todos} handleAddTodo={handleAddTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
