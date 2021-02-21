import React from "react";

import "../../styles/app.css";
import Sidebar from "../sidebar";
import "../../styles/resizer.css";
import { Root, Main } from "./app.styles";
import { useSidebar } from "../../contexts/sidebar";

const App: React.FC = () => {
  return (
    <Root>
      <Sidebar />
      <Main>1234567890</Main>
    </Root>
  );
};

export default App;
