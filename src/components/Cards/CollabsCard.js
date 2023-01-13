import React from 'react'
import styles from '../../style'

const CollabsCard = ({props}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className={`${styles.flexStart} gap-4 m-5`}>
        {props.icon}
        <div>
          <div className={` ${styles.heading2}`}>{props.name}</div>
          <div className={`text-dimGreen`}>{props.title}</div>
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
  )
}

export default CollabsCard