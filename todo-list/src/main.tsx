import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="e819444596aa41c6a812ac66bbcec195"
      domain="https://todolist1.kinde.com"
      redirectUri="http://localhost:5174"
      logoutUri="http://localhost:5174"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
