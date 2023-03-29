import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2vw;
  .ReactFlipCard_container__lBi9r {
    width: fit-content;
    height: fit-content;
  }
`;

export const CounterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CounterItemWrapper = styled.div`
  width: 8vw;
  height: 8vw;
  display: flex;
  flex-direction: column;
  border-radius: 0.5vw;
  overflow: hidden;
  position: relative;
  .backdrop {
    width: 100%;
    height: 100%;
    z-index: 99 !important;
  }
`;

export const CounterItemUpper = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.softDarkBlue};
  opacity: 0.8;
`;

export const CounterItemBottom = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.darkBlue};
  height: 50%;
  background-color: ${(props) => props.theme.softDarkBlue};
`;

export const Splitter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .backdrop {
    background-color: black;
    width: 100%;
    height: 50%;
    top: 0;
    position: absolute;
    opacity: 0.2;
  }
  .circles {
    height: 0.5vw;
    width: 0.46vw;
    border-radius: 50%;
    position: absolute;
    top: 47%;
    background-color: ${(props) => props.theme.veryDarkBlue};
  }
  .first {
    left: -3%;
  }
  .second {
    right: -3%;
  }
`;

export const CounterTitle = styled.div`
  margin-top: 1.5vw;
  color: white;
  opacity: 0.6;
  letter-spacing: 5px;
  font-size: 0.8vw;
`;

export const ValueWrapper = styled.div`
  color: ${(props) => props.theme.softRed};
  position: absolute;
  font-size: 4.5vw;
  top: 13.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 0 !important;
`;
