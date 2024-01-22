"use client";
import React, { useState } from "react";
import stats from "./page.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}>
      <div className={stats.container}>
        <div className="container">
          {counterOn && (
            <div className={stats.wrapper}>
              <h2 className={stats.heading}>Experience is what matters</h2>
              <div className={stats.counterGroup}>
                <CountUp
                  start={0}
                  end={15}
                  duration={2.75}
                  decimals={0}
                  suffix="+"
                  className={stats.counter}
                />
                <p>Years in business</p>
              </div>
              <div className={stats.counterGroup}>
                <CountUp
                  start={0}
                  end={1000}
                  duration={2}
                  decimal=","
                  prefix="+"
                  suffix="+"
                  className={stats.counter}
                />
                <p>Policies</p>
              </div>

              <div className={stats.counterGroup}>
                <CountUp
                  start={0}
                  end={15000}
                  duration={2.75}
                  decimal=","
                  suffix="+"
                  className={stats.counter}
                />
                <p>Satisfied Customers</p>
              </div>
            </div>
          )}
          <br />
          <p>
            Short Term Insurance is our specialism. It is the only type of
            insurance we offer and we are experts in the field. We are always
            looking for ways to make our customer journey easier and more
            efficient. Customer service and customer experience are of paramount
            importance to us. We want to ensure you get the absolute best level
            of cover at the very best prices.
          </p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
