import React from "react";
import CollabsCard from "../../../components/Cards/CollabsCard";
import { collabs } from "../../../constants";

const Collaboration = () => {
  return (
    <section>
      <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5'>
                {
                    collabs.map(collab => (
                        <CollabsCard
                        key={collab.id}
                        props={collab}
                        ></CollabsCard>
                    ))
                }
            </div>
    </section>
  );
};

export default Collaboration;
