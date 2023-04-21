import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { StateManagement } from "./StateManagement";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <HashRouter>
        <StateManagement>
          <App />
        </StateManagement>
      </HashRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
