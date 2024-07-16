import React, { useState } from "react";
import Footer from "./Footer";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import List from "./List";
import SideBar from "./SideBar";

function App() {
  const [todos, setTodos] = useState([
    { text: "buy bananas", isCompleted: false, id: 1 },
    { text: "write letter", isCompleted: true, id: 2 },
    { text: "make dinner", isCompleted: false, id: 3 },
  ]);

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[872px] h-[590px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
        <SideBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
