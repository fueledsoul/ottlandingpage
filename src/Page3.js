import React from "react";
import poster7 from "./Assets/Slices/poster7.jpg";
import poster8 from "./Assets/Slices/poster8.jpg";
import poster9 from "./Assets/Slices/poster9.jpg";
export default function Page3({ page3data }) {
  return (
    <>
      {page3data?.page?.contentItems?.content.map((val, index) => {
        // console.log("sss", val["poster-image"]);
        var dataw = val["poster-image"];
        console.log("sss", dataw);
        return (
          <>
            {dataw === "poster7.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster7} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster8.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster8} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster9.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster9} />
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
