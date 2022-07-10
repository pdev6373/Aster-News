import styled from "styled-components";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import arrow from "../../assets/arrow-right.svg";
import user from "../../assets/user.svg";
import expand from "../../assets/expand.svg";

const AppHeader = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  background: #f4f9f8;
  justify-content: space-between;
  padding-block: 15px 23px;
  gap: 45px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 260px; /////////
  padding-left: 32px;

  color: ${({
    theme: {
      main: { color },
    },
  }) => color};
`;

const LogoText = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: #0768b5;
`;

export const Header = () => {
  return (
    <AppHeader>
      <LogoWrapper>
        <img src={logo} alt="logo" width="29" height="35" />
        <LogoText>Aster News</LogoText>
      </LogoWrapper>

      <div style={{ display: "flex", flexGrow: "1", gap: "20px" }}>
        <div
          style={{
            position: "relative",
            width: "64.2%",
          }}
        >
          <input
            type="text"
            placeholder="Search for news.."
            style={{
              background: "#2F9FF80A",
              borderRadius: "4px",
              border: "none",
              outline: "none",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "rgba(7, 45, 75, 0.302)",
              padding: "14px",
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src={search}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "18px",
              height: "18px",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            width: "35.8%",
          }}
        >
          <button
            style={{
              background: "#f4f9f8",
              borderRadius: "4px",
              outline: "none",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "18px",
              padding: "14px",
              color: "#072D4B",
              width: "100%",
              border: "0.2px solid #072D4B",
              textAlign: "left",
            }}
          >
            Latest news on{" "}
            <span
              style={{
                color: "#2F9FF8",
              }}
            >
              Covid-19
            </span>
          </button>
          <img
            src={arrow}
            style={{
              position: "absolute",
              right: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "18px",
              height: "18px",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "285px",
          paddingRight: "34px",
        }}
      >
        <img src={user} />
        <span
          style={{
            marginInline: "13px 36px",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#072D4B",
          }}
        >
          My Profile
        </span>
        <img src={expand} />
      </div>
    </AppHeader>
  );
};
