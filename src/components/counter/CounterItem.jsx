import React from "react";
import {
  CounterItemBottom,
  CounterItemContainer,
  CounterItemUpper,
  CounterItemWrapper,
  CounterTitle,
  Splitter,
  ValueWrapper,
} from "./Counter.styles";

const CounterItem = ({ title, value, id }) => {
  return (
    <>
      <CounterItemContainer>
        <CounterItemWrapper>
          <CounterItemUpper />
          <Splitter>
            <div className="circles first" />
            <div className="circles second" />
            <div className="backdrop" />
          </Splitter>
          <CounterItemBottom />
          <ValueWrapper>{value}</ValueWrapper>
        </CounterItemWrapper>
        <CounterTitle>{title}</CounterTitle>
      </CounterItemContainer>
    </>
  );
};

export default CounterItem;
