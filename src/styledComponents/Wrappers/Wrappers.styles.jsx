import styled from "styled-components";

export const TopNewsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 29.58px;
  background: #ffffff;
  box-shadow: 0px 2px 20px 0px #0000000a;
  border-radius: 4px;
  padding: 17px 15.3px 17px 23.46px;
`;

export const NewsWrapper = styled(TopNewsWrapper)`
  padding: 17px 17.28px 13px 23.37px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  margin-inline: ${({ minline }) => minline};
`;
