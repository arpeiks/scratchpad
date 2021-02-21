import styled from "styled-components";
import { SIDEBAR_STATE, SIDEBAR_WIDTH } from "../../utils/enums";

export const Root = styled.div`
  min-height: 100vh;
  background-color: orange;
`;

export const Main = styled.main`
  transition: 0.5s;
  min-height: 100vh;
  background-color: orange;

  &.${SIDEBAR_STATE.PINNED} {
    margin-left: ${SIDEBAR_WIDTH.PINNED}px;
  }

  &.${SIDEBAR_STATE.EXPANDED} {
    margin-left: ${SIDEBAR_WIDTH.COLLAPSED}px;
  }

  &.${SIDEBAR_STATE.COLLAPSED} {
    margin-left: ${SIDEBAR_WIDTH.COLLAPSED}px;
  }
`;
