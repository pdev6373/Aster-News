import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 76px;
  bottom: 0;
  margin-top: 8px;
  overflow-y: auto;
  width: 280px;
`;

export const Ul = styled.ul`
  margin-bottom: 108px;
`;

export const List = styled.li`
  background: transparent;

  color: ${({
    theme: {
      main: { color },
    },
  }) => color};
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 18px;
  padding: 15px;
  text-decoration: none;
  height: 100%;
  width: calc(100% - 10px);

  font-weight: ${({ $currentnav }) => ($currentnav ? "700" : "400")};
  color: ${({ $currentnav }) => ($currentnav ? "#2F9FF8" : "inherit")};
  background: ${({ $currentnav }) => ($currentnav ? "#2F9FF81A" : "inherit")};
  border-radius: ${({ $currentnav, shouldhaveborder }) =>
    $currentnav && !shouldhaveborder ? "0 37px 37px 0" : "0"};

  border-block: ${({ shouldhaveborder }) =>
    shouldhaveborder ? "0.2px solid #072d4b99" : "none"};
  margin-block: ${({ shouldhaveborder }) =>
    shouldhaveborder ? "22px" : "none"};

  ::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #2f9ff8;
    border-radius: 50%;

    visibility: ${({ $currentnav }) => ($currentnav ? "visible" : "hidden")};
  }

  svg {
    margin-inline: 12px 22px;
  }
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 18px;
  padding: 20px;
  gap: 11px;
  background: #2f9ff8;
  border-radius: 4px;
  color: #fff;
  width: calc(100% - 32px);
  margin-inline: auto;
  margin-bottom: ${({ mb }) => mb};
`;

export const UpgradeButton = styled.button`
  padding: 10px 27px;
  background: #0768b5;
  border-radius: 4px;
  border: none;
  color: inherit;
`;

export const UpgradePrice = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
`;
