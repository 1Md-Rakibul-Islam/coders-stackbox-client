import React from "react";
import styles from "../../style";

const CollabsCard = ({ props }) => {
  return (
    <div className="relative rounded-lg overflow-hidden glassmorphism">
      <div className={`flex flex-col justify-center items-center`}>
        {props.icon}

        <div className={`${styles.flexCenter}`}>
          <div className={` ${styles.heading3}`}>{props.title}</div>
        </div>
      </div>
      <div className="flex justify-center px-4">
        <div
          className={`bg-gradient-to-r from-accent to-secondary w-full `}
          style={{ height: "2px" }}
        />
      </div>

      <div className="p-4">
        <div className={`${styles.paragraph}`}>{props.details}</div>
      </div>
    </div>
  );
};

export default CollabsCard;
