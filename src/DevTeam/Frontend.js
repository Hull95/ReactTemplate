import React from "react";
import CardProfile from "./CardProfile";

function Frontend({ dataParentToChild }) {
  let filterData = dataParentToChild.data.filter(
    (item) => item.position === "Frontend"
  );

  return (
    <>
      <div className="container">
        <div className="row">
          {filterData.map((item, index) => (
            <CardProfile
              name={item.name}
              position={item.position}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Frontend;
