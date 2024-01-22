import React from "react";
import Style from "./page.module.css";

const WhatIsNeeded = () => {
  return (
    <div className={Style.container}>
      <h2>The benefits of our car insurance</h2>
      <p>
        So that we can give you an accurate price, we'll ask for a few snippets
        of information, this includes:
      </p>
      <ol className={Style.list}>
        <li>
          <b>A little bit about you</b> – just the usual, like your name, your
          date of birth and your address
        </li>
        <li>
          <b>When you want your cover to start</b> – anywhere from right now to
          within 60 days
        </li>
        <li>
          <b>Who else will be driving</b> – we’ll need details of any other
          drivers too
        </li>
        <li>
          <b>How much cover you’ll need</b> – which type of insurance and any
          add-ons
        </li>
      </ol>
    </div>
  );
};

export default WhatIsNeeded;
