import styled from "styled-components";

import share from "../../assets/share.svg";
import readLater from "../../assets/read-later.svg";
import feather from "../../assets/feather.svg";
import previous from "../../assets/arrow-right (2).svg";
import next from "../../assets/arrow-right (3).svg";

import newsOneImage from "../../assets/news-one-img.svg";
import secondNews from "../../assets/second-news.svg";
import thirdNews from "../../assets/third-news.svg";
import fourthNews from "../../assets/fourth-news.svg";
import fifthNews from "../../assets/fifth-news.svg";
import sixthNews from "../../assets/sixth-news.svg";

import seventhNews from "../../assets/seventh-news.svg";
import eighthNews from "../../assets/eighth-news.svg";
import ninethNews from "../../assets/nineth-news.svg";

import creatorOne from "../../assets/creator-one.svg";
import creatorTwo from "../../assets/creator-two.svg";
import creatorThree from "../../assets/creator-three.svg";
import creatorFour from "../../assets/creator-four.svg";
import creatorFive from "../../assets/creator-five.svg";

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

const MainWrapper = styled.main`
  flex: 1;
`;

export const Main = () => {
  const news = [
    {
      title:
        "Samsung Galaxy F22 launched in India: Price, features, other details",
      body: " Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment. The new smartphone is powered by a MediaTek chipset and features a high refresh rate AMOLED display.",
      image: newsOneImage,
    },
    {
      title: "Battlegrounds Mobile India iOS release date",
      body: "The reason behind their disappointment is that iPhone users have been..",
      image: secondNews,
    },
    {
      title: "Instagram working on ‘Exclusive Stories’ for subscribers",
      body: "Instagram could be jumping on the paid subscription..",
      image: thirdNews,
    },
    {
      title:
        "Petrol, diesel prices -  July 6: Fuel prices unchanged after touching record high",
      body: "The price of petrol remained unchanged on July 6 after reaching a new record high on the previous day, according to a price notification by state-owned..",
    },
    {
      title: "Android smartphone users alert! Remove these 9 apps now",
      body: "Stealer trojans were spread as harmless software..",
      image: fourthNews,
    },
    {
      title: "How to install Windows 11 on almost any unsupported PC",
      body: "Microsoft is allowing some unsupported computers..",
      image: fifthNews,
    },
    {
      title: "This charging feature from Android phones may come to iPhone 13",
      body: "You will always find a set of people who will say that..",
      image: sixthNews,
    },
  ];

  const extraNews = [
    {
      title: "INDvENG Tests to be played in front of crowd",
      body: "The 5-Test series between India & England is set to be played in front of packed..",
      image: seventhNews,
    },
    {
      title: "The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)",
      body: "Driven by demand for connected earbuds and a..",
      image: eighthNews,
    },
    {
      title:
        "Biden's cold response to Afghanistan's collapse to have far consequences",
      body: "When US President Joe Biden chose in April to withdraw all American forces from Afghanistan by September, we were among those who judged..",
    },
    {
      title:
        "Hardik Pandya 'is bowling and it is a very good sign' - Suryakumar",
      body: "I think that the team management and Hardik..",
      image: ninethNews,
    },
  ];

  const creators = [
    {
      image: creatorOne,
      name: "Shan Teylor",
      company: "Tech Mint",
    },
    {
      image: creatorTwo,
      name: "Mary Angela",
      company: "Live Mint",
    },
    {
      image: creatorThree,
      name: "Kyon Cho Chi",
      company: "Bizz Daily",
    },
    {
      image: creatorFour,
      name: "Paul Livingstone",
      company: "Sport Biz",
    },
    {
      image: creatorFive,
      name: "Sara Jay",
      company: "Radar 52",
    },
  ];

  return (
    <MainWrapper>
      <LargeHeading height="24px" mblock="15px 26px">
        Top Stories for you
      </LargeHeading>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {news.map((news, index) =>
          !index ? (
            <TopNewsWrapper>
              <div>
                <MediumHeading mb="10px">{news.title}</MediumHeading>
                <Paragraph mb="17px">{news.body}</Paragraph>

                <FlexWrapper>
                  <FlexWrapper direction="row" gap="19.38px">
                    <LightParagraph>The Mint</LightParagraph>
                    <LightParagraph>15 mins ago</LightParagraph>
                  </FlexWrapper>
                  <FlexWrapper direction="row" gap="19.38px" minline="auto">
                    <NewsActionButton>
                      <img src={share} />
                      <span>Share</span>
                    </NewsActionButton>
                    <NewsActionButton>
                      <img src={readLater} />
                      <span>Read Later</span>
                    </NewsActionButton>
                  </FlexWrapper>
                </FlexWrapper>
              </div>

              <img src={newsOneImage} />
            </TopNewsWrapper>
          ) : (
            <NewsWrapper key={index} width="calc(50% - 10px)">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <MediumHeading mb="10px">{news.title}</MediumHeading>
                  <Paragraph>{news.body}</Paragraph>
                </div>
                <img src={news.image || null} />
              </div>
              <FlexWrapper direction="row" gap="19.38px">
                <LightParagraph>Sport Biz</LightParagraph>
                <LightParagraph>42 mins ago</LightParagraph>
                <NewsActionButton>
                  <img src={share} />
                  <span>Share</span>
                </NewsActionButton>
                <NewsActionButton>
                  <img src={readLater} />
                  <span>Read Later</span>
                </NewsActionButton>
              </FlexWrapper>
            </NewsWrapper>
          )
        )}
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
            <img src={feather} />
            <MediumHeading>Creators you should follow</MediumHeading>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={previous} />
            <img src={next} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px", marginBottom: "44px" }}>
          {creators.map((creator) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: "1",
                boxShadow: "0px 2px 20px 0px #0000000A",
                borderRadius: "4px",
                background: "#fff",
                padding: "13px",
              }}
            >
              <img src={creator.image} style={{ marginBottom: "7px" }} />
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  color: "#072D4B",
                }}
              >
                {creator.name}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "22px",
                  color: "#072D4B",
                  opacity: "0.4",
                  marginBottom: "7px",
                }}
              >
                {creator.company}
              </div>
              <button
                style={{
                  fontSize: "15px",
                  lineHeight: "18px",
                  width: "100%",
                  borderRadius: "4px",
                  background: "#2F9FF8",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  paddingBlock: "7px",
                }}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "44px",
          }}
        >
          {extraNews.map((news, index) => (
            <NewsWrapper key={index} width="calc(50% - 10px)">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <MediumHeading mb="10px">{news.title}</MediumHeading>
                  <Paragraph>{news.body}</Paragraph>
                </div>
                <img src={news.image || null} />
              </div>
              <FlexWrapper direction="row" gap="19.38px">
                <LightParagraph>Sport Biz</LightParagraph>
                <LightParagraph>42 mins ago</LightParagraph>
                <NewsActionButton>
                  <img src={share} />
                  <span>Share</span>
                </NewsActionButton>
                <NewsActionButton>
                  <img src={readLater} />
                  <span>Read Later</span>
                </NewsActionButton>
              </FlexWrapper>
            </NewsWrapper>
          ))}
        </div>
        <button
          style={{
            fomtSize: "15px",
            lineHeight: "18px",
            color: "#072D4B",
            border: "0.2px solid #072D4B",
            borderRadius: "4px",
            padding: "10px 21px",
            background: "transparent",
            marginBottom: "102px",
          }}
        >
          Show More
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          lineHeight: "22px",
          color: "#072D4B",
          opacity: "0.4",
          marginBottom: "29px",
        }}
      >
        <div>© Aster News, 2022</div>
        <div style={{ display: "flex", gap: "38px" }}>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </MainWrapper>
  );
};
