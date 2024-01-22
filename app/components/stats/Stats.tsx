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
                  // separator=" "
                  decimals={0}
                  // decimal=","
                  // prefix="EUR "
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
                  // separator=" "
                  // decimals={1}
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
                  // separator=" "
                  // decimals={2}
                  decimal=","
                  // prefix="EUR "
                  // suffix=" left"
                  className={stats.counter}
                />
                <p>Satisfied Customers</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
