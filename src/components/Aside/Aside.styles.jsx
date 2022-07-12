import styled from "styled-components";

export const AsideComponent = styled.aside`
  position: fixed;
  top: 76px;
  right: 25px;
  bottom: 0;
  margin-top: 8px;
  width: 295px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    border-left: 4px transparent solid;
    background-clip: padding-box;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
`;
