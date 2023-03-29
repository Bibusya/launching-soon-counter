import React, { useEffect, useState } from "react";
import { CounterWrapper } from "./Counter.styles.js";
import CounterItem from "./CounterItem.jsx";
import ReactFlipCard from "reactjs-flip-card";

const Counter = () => {
  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-5-12`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <span>
        {timeLeft[interval]} {interval}
      </span>
    );
  });

  //TODO SIMULATE MOUSE CLICK ON CHANGE OF VALUES TO ANIMATE FLIPPING CARD

  // useEffect(() => {}, [timeLeft.minutes]);
  // useEffect(() => {}, [timeLeft.hours]);
  // useEffect(() => {}, [timeLeft.days]);
  return (
    <CounterWrapper>
      <CounterItem
        id="days"
        title="DAYS"
        value={timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
      />
      <CounterItem
        id="hours"
        title="HOURS"
        value={timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
      />
      <CounterItem
        id="minutes"
        title="MINUTES"
        value={
          timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes
        }
      />
      <CounterItem
        id="seconds"
        title="SECONDS"
        value={
          timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds
        }
      />
    </CounterWrapper>
  );
};

export default Counter;
