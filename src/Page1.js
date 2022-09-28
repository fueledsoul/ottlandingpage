import React from "react";
import poster1 from "../src/Assets/Slices/poster1.jpg";
import poster2 from "./Assets/Slices/poster2.jpg";
import poster3 from "./Assets/Slices/poster3.jpg";
export default function Page1({ alldata }) {
  return (
    <>
      {alldata?.page?.contentItems?.content.map((val, index) => {
        // console.log("sss", val["poster-image"]);
        var dataw = val["poster-image"];
        console.log("sss", dataw);
        return (
          <>
            {dataw === "poster1.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster1} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster2.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster2} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster3.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster3} />
                <p className="title">{val.name}</p>
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
}
