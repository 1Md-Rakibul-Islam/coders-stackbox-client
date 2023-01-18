import React from "react";
import BestDevCard from "../../../components/Cards/BestDevCard";
import { bestDevs } from "../../../constants";
import styles, { layout } from "../../../style";

const BestDeveloper = () => {
  return (
    <div className={`${layout.sectionCol}`}>
      <div className={`${layout.sectionInfo} text-center z-10`}>
        <div className={`${styles.heading2} `}>Best Developers</div>
        <div className={`${styles.paragraph} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          necessitatibus
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5">
        {bestDevs.map((bestDev) => (
          <BestDevCard DevCard key={bestDev.id} props={bestDev}></BestDevCard>
        ))}
      </div>
    </div>
  );
};

export default BestDeveloper;
