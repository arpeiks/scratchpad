import React from "react";
import PropTypes from "prop-types";

import { SidebarProvider } from "./sidebar";

interface IProviderComposer {
  contexts: any[];
  children: React.ReactNode;
}

const ProviderComposer = ({ contexts, children }: IProviderComposer) => {
  return contexts.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
};

const ContextProvider: React.FC = ({ children }) => {
  return (
    <ProviderComposer contexts={[<SidebarProvider />]}>
      {children}
    </ProviderComposer>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node,
};

ProviderComposer.propTypes = {
  children: PropTypes.node,
  contexts: PropTypes.arrayOf(PropTypes.node),
};
