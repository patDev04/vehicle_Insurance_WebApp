"use client";
import React from "react";
import info from "./page.module.css";
import "../../globals.css";
import CustomButton from "../utils/CustomButton";
import Image from "next/image";
import panalVector from "../../../public/assests/Free Car Insurance Illustration (SVG).svg";
import { FaAward, FaCarOn } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const infoObj = [
  {
    title: "Extra protection against uninsured drivers",
    icon: <FaCarOn />,
    text: "If your vehicle is involved in an accident caused by an uninsured motorist, we'll refund any excess you've paid.You’ll need to provide us with details of the other vehicle and driver",
  },
  {
    title: "We’ll drop you home after an accident",
    icon: <FaAward />,
    text: "When your car's not safe to drive, we'll deliver you to your front door (or wherever you're heading) and whisk your car off to get fixed with one of our approved repairers ",
  },
  {
    title: "Our promise for any repairs we make",
    icon: <RiVerifiedBadgeFill />,
    text: "Following a claim, we guarantee the quality of the repairs made by our approved repairers ",
  },
];

const Info = () => {
  return (
    <div className={info.container}>
      <div className="container">
        <div className={info.wrapper}>
          <div>
            <h1 className={info.heading}>
              Why would I need short term insurance?
            </h1>
            <h3 className={info.subHeading}>
              There are many reasons when short term car insurance will be more
              beneficial to an annual policy
            </h3>
            <br />
            <p className="text">
              You may need to insure your car for an extra month at the end of
              your annual policy, for example, this could work out well if you
              were selling your car or getting rid of it – this can work out as
              a much more efficient way of keeping the car insured short term,
              rather than cancelling an annual policy which involves
              cancellation costs.
            </p>
            <br />
            <p>
              You may need to insure an additional driver for a short period,
              say for a mini-break. Online short term car insurance cover can do
              this quickly and efficiently for you, rather than going through
              the process of trying to add the driver to your main annual
              insurance policy. Our temporary cover is Comprehensive, so you can
              relax knowing that the driver is properly insured.
            </p>

            <div className={info.item}>
              <h2 className={info.heading}>
                The benefits of our car insurance
              </h2>
              <ul className={info.list}>
                {infoObj.map((item: any, idx: number) => (
                  <li className={info.listHeading}>
                    <i className={info.listIcon}>{item.icon}</i>
                    <div>
                      <h3 className={info.pointList}>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={info.sidePanel}>
            <h1 className={info.sidePanelHeading}>
              We Got You Covered. Don’t Get Caught Off Guard
            </h1>
            <p>
              You can be covered immediately in minutes by following the simple
              steps on our website. It is so easy. Within seconds, your
              documents are then delivered to your inbox and you have the peace
              of mind knowing that you are correctly insured for your required
              purpose.
            </p>
            <Image
              src={panalVector}
              width={300}
              height={300}
              alt="panel-vector"
              className={info.sidePanelmg}
            />
            <CustomButton title="insurance features" href={"/"} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
