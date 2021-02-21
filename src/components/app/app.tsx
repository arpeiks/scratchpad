import React from "react";

import "../../styles/app.css";
import Sidebar from "../sidebar";
import "../../styles/resizer.css";
import { Root, Main } from "./app.styles";
import { SIDEBAR_STATE } from "../../utils/enums";
import { useSidebar } from "../../contexts/sidebar";

const App: React.FC = () => {
  const [sidebar, updateSidebar] = useSidebar();

  const handlePin = () => {
    const width =
      sidebar.width === SIDEBAR_STATE.COLLAPSED
        ? SIDEBAR_STATE.PINNED
        : SIDEBAR_STATE.COLLAPSED;

    updateSidebar({ ...sidebar, width });
  };

  return (
    <Root>
      <Sidebar />
      <Main className={sidebar.width}>
        <div>1234567890</div>
        <button onClick={handlePin}>PIN</button>
      </Main>
    </Root>
  );
};

export default App;
