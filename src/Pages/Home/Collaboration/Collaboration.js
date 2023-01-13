import React from "react";
import CollabsCard from "../../../components/Cards/CollabsCard";
import { collabs } from "../../../constants";
import styles, { layout } from "../../../style";

const Collaboration = () => {
  return (
    <div className={`${layout.sectionCol}`}>
      <div className={`${layout.sectionInfo} text-center`}>
        <div className={`${styles.heading2} `}>Best Developers</div>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5">
          {collabs.map((collab) => (
            <CollabsCard key={collab.id} props={collab}></CollabsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
