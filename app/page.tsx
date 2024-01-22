import { Open_Sans } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import LandingImage from "../public/assests/kyle-bushnell-mv3tgQFUT5o-unsplash.jpg";
import homeStyle from "./page.module.css";
import Info from "./components/info/Info";
import Stats from "./components/stats/Stats";
import { FeaturePolicy } from "./components/policy/FeaturePolicy";

export default function Home() {
  return (
    <main>
      <div className={homeStyle.landing}>
        {/* <div className={homeStyle.landingImageConatiner} >
          <Image src={LandingImage} alt='landing-img' className={homeStyle.landingImage}  width={1000} height={1000}/>
        </div> */}
        <div className={homeStyle.headingContainer}>
          <h1 className={homeStyle.heading}>
            We are your trusted insurance agency
          </h1>
          <p className={homeStyle.subheader}>
            We design and build industry-leading web-based products that bring
            value to your customers, delivered with compelling UX.
          </p>
        </div>
      </div>
      <div className="container">
        <FeaturePolicy />
      </div>
      <Info />
      <Stats />
    </main>
  );
}
