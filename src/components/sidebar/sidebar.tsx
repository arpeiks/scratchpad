import React from "react";

import Item from "../sidebar-item";
import { Nav, Root } from "./sidebar.styles";
import { SIDEBAR_STATE, SIDEBAR_WIDTH } from "../../utils/enums";
import { useSidebar } from "../../contexts/sidebar";

const Sidebar: React.FC = () => {
  const [state, update] = useSidebar();

  const handleExpand = () => {
    if (
      state.width === SIDEBAR_STATE.EXPANDED ||
      state.width === SIDEBAR_STATE.PINNED
    ) {
      return;
    }

    update(() => ({
      ...state,
      width: SIDEBAR_STATE.EXPANDED,
    }));
  };

  const handleCollapse = () => {
    if (
      state.width === SIDEBAR_STATE.COLLAPSED ||
      state.width === SIDEBAR_STATE.PINNED
    ) {
      return;
    }

    update(() => ({
      ...state,
      width: SIDEBAR_STATE.COLLAPSED,
    }));
  };

  return (
    <Root
      className={state.width}
      onMouseEnter={handleExpand}
      onMouseLeave={handleCollapse}
    >
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
