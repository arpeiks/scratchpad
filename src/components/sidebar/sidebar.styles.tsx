import styled from "styled-components";
import { SIDEBAR_WIDTH } from "../../utils/enums";

interface IRoot {
  className: string;
}

export const Root = styled.div<IRoot>`
  top: 0;
  left: 0;
  width: 68px;
  height: 100vh;
  position: fixed;
  background: blue;
  overflow: hidden;
  transition: 0.3s;
  box-sizing: border-box;
  padding: 2rem 1rem 0 0;

  &.PINNED {
    width: ${SIDEBAR_WIDTH.PINNED}px;
  }

  &.EXPANDED {
    width: ${SIDEBAR_WIDTH.EXPANDED}px;
  }
`;

export const Nav = styled.nav`
  overflow: hidden;
`;
