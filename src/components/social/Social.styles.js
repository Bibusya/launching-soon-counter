import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2vw;
  position: absolute;
  bottom: 5%;
  z-index: 1;
`;

export const SocialIcon = styled.div`
  cursor: pointer;
  &:hover {
    svg path {
      fill: ${(props) => props.theme.softRed};
    }
  }
`;
