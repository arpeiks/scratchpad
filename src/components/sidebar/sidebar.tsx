import React from "react";

import Item from "../sidebar-item";
import { Nav, Root } from "./sidebar.styles";
import { useSidebar } from "../../contexts/sidebar";

const Sidebar: React.FC = () => {
  const [state, update] = useSidebar();

  const handleExpand = () =>
    update(() => ({
      ...state,
      width: "EXPANDED",
    }));

  const handleCollapse = () =>
    update(() => ({
      ...state,
      width: "COLLAPSED",
    }));

  console.log(state);

  return (
    <Root onMouseEnter={handleExpand} onMouseLeave={handleCollapse}>
      <Nav>
        <Item icon="dashboard" title="Dashboard" />
        <Item icon="dashboard" title="Dashboard" />
        <Item icon="dashboard" title="Dashboard" />
        <Item icon="dashboard" title="Dashboard" />
      </Nav>
    </Root>
  );
};

export default Sidebar;
