import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

import { navigation } from "../../utils/NavigationRoutes";

import { topStoriesIcon } from "../../assets/navIcons/topStoriesIcon";
import { aroundTheWorldIcon } from "../../assets/navIcons/aroundTheWorldIcon";
import { businessIcon } from "../../assets/navIcons/businessIcon";
import { healthIcon } from "../../assets/navIcons/healthIcon";
import { covid19Icon } from "../../assets/navIcons/covid19Icon";
import { entertainmentIcon } from "../../assets/navIcons/entertainmentIcon";
import { sportsIcon } from "../../assets/navIcons/sportsIcon";
import { discussionIcon } from "../../assets/navIcons/discussionIcon";
import { notificationIcon } from "../../assets/navIcons/notificationIcon";
import { newsFeedSettingsIcon } from "../../assets/navIcons/newsFeedSettingsIcon";

const List = styled.li`
  background: transparent;

  color: ${({
    theme: {
      main: { color },
    },
  }) => color};
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: none;
  height: 100%;

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
    visibility: ${({ $currentnav }) => ($currentnav ? "visible" : "hidden")};
    width: 6px;
    height: 6px;
    background: #2f9ff8;
    border-radius: 50%;
  }

  svg {
    margin-inline: 12px 22px;
  }
`;

export const Navigation = () => {
  const currentNav = useParams()["*"];

  const icons = [
    topStoriesIcon,
    aroundTheWorldIcon,
    businessIcon,
    healthIcon,
    covid19Icon,
    entertainmentIcon,
    sportsIcon,
    discussionIcon,
    notificationIcon,
    newsFeedSettingsIcon,
  ];

  return (
    <nav
      style={{
        width: "260px", ////////
      }}
    >
      <ul>
        {navigation.map((item, index) => {
          const isCurrentNav = currentNav === item.path;
          const isCovidNav = item.name === "Covid 19";
          const iconColor = isCurrentNav ? "#2F9FF8" : "#072D4B";

          return (
            <List key={item.name}>
              <Link
                to={`/${item.path}`}
                $currentnav={isCurrentNav}
                $shouldhaveborder={isCovidNav}
              >
                {icons[index](iconColor)}
                <div>{item.name}</div>
              </Link>
            </List>
          );
        })}
      </ul>
    </nav>
  );
};
