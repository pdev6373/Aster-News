import { useParams } from "react-router-dom";

import {
  Nav,
  Ul,
  List,
  Link,
  SubscribeWrapper,
  UpgradeButton,
  UpgradePrice,
} from "./Navigation.styles";
import { FlexWrapper } from "../../styledComponents/Wrappers/Wrappers.styles";

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
import gift from "../../assets/gift.svg";

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

export const Navigation = () => {
  const currentNav = useParams()["*"];

  return (
    <Nav>
      <Ul>
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
                {item.name}
              </Link>
            </List>
          );
        })}
      </Ul>

      <SubscribeWrapper mb="20px">
        <FlexWrapper align="center" justify="space-between">
          <img src={gift} />
          <p>Subscribe to Premium</p>
        </FlexWrapper>
        <FlexWrapper align="center" justify="space-between">
          <div>
            <UpgradePrice>$8</UpgradePrice>/m
          </div>
          <UpgradeButton>Upgrade</UpgradeButton>
        </FlexWrapper>
      </SubscribeWrapper>
    </Nav>
  );
};
