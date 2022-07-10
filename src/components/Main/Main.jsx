import styled from "styled-components";

import share from "../../assets/share.svg";
import readLater from "../../assets/expand.svg";

import {
  LargeHeading,
  MediumHeading,
} from "../../styledComponents/Headings/Headings.styles";
import {
  TopNewsWrapper,
  NewsWrapper,
  FlexWrapper,
} from "../../styledComponents/Wrappers/Wrappers.styles";
import {
  LightParagraph,
  Paragraph,
} from "../../styledComponents/Paragraphs/Paragraphs.styles";
import { NewsActionButton } from "../../styledComponents/Buttons/Buttons.styles";

import newsOneImage from "../../assets/news-one-img.svg";

const MainWrapper = styled.main`
  flex: 1;
`;

export const Main = () => {
  return (
    <MainWrapper>
      <LargeHeading height="24px" mblock="15px 26px">
        Top Stories for you
      </LargeHeading>

      <TopNewsWrapper>
        <div>
          <MediumHeading mb="10px">
            Samsung Galaxy F22 launched in India: Price, features, other details
          </MediumHeading>
          <Paragraph mb="17px">
            Samsung Galaxy F22 has been launched in India. The new smartphone
            has been priced in the mid-range segment. The new smartphone is
            powered by a MediaTek chipset and features a high refresh rate
            AMOLED display.
          </Paragraph>

          <FlexWrapper>
            <FlexWrapper direction="row" gap="19.38px">
              <LightParagraph>The Mint</LightParagraph>
              <LightParagraph>15 mins ago</LightParagraph>
            </FlexWrapper>
            <FlexWrapper direction="row" gap="19.38px" minline="auto">
              <NewsActionButton>
                <img src={share} />
                Share
              </NewsActionButton>
              <NewsActionButton>
                <img src={readLater} />
                Read Later
              </NewsActionButton>
            </FlexWrapper>
          </FlexWrapper>
        </div>

        <img src={newsOneImage} />
      </TopNewsWrapper>
    </MainWrapper>
  );
};
