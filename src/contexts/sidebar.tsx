import React from "react";
import PropTypes from "prop-types";
import { SIDEBAR_WIDTH } from "../utils/enums";

interface ISTATE {
  width: SIDEBAR_WIDTH;
}

type IUPDATE = any;

const INITIAL_STATE = {
  width: SIDEBAR_WIDTH.COLLAPSED,
};

const StateContext = React.createContext<ISTATE | null>(null);
const UpdateContext = React.createContext<IUPDATE | null>(null);

const SidebarProvider: React.FC = ({ children }) => {
  const [state, update] = React.useState(INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <UpdateContext.Provider value={update}>{children}</UpdateContext.Provider>
    </StateContext.Provider>
  );
};

const useState = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error("useSidebarState must be used within a SidebarProvider");
  }
  return context;
};

const useUpdate = () => {
  const context = React.useContext(UpdateContext);
  if (!context) {
    throw new Error("useSidebarUpdate must be used within a SidebarProvider");
  }
  return context;
};

const useSidebar = () => [useState(), useUpdate()];

export { useSidebar, SidebarProvider };

SidebarProvider.propTypes = {
  children: PropTypes.node,
};
