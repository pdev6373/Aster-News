import styled from "styled-components";

export const LargeHeading = styled.h2`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${({
    theme: {
      main: { color },
    },
  }) => color};
  height: ${({ height }) => height};
  margin-block: ${({ mblock }) => mblock};
`;

export const MediumHeading = styled(LargeHeading)`
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: ${({ mb }) => mb};
`;
