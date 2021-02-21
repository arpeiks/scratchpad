import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import ContextProvider from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
