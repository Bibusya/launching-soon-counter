import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("bg-stars.svg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-color: ${(props) => props.theme.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  width: fit-content;
  margin-top: 6.111vw;
  margin-bottom: 6vw;
  letter-spacing: 6px;
`;
