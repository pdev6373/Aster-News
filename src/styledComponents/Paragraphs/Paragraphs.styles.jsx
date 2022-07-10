import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 22px;
  opacity: 0.6;
  color: ${({ theme: { main: color } }) => color};
  margin-bottom: ${({ mb }) => mb};
`;

export const LightParagraph = styled.p`
  font-size: 12px;
  opacity: 0.4;
`;
