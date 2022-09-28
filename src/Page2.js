import React from "react";
import poster6 from "./Assets/Slices/poster6.jpg";
import poster4 from "./Assets/Slices/poster4.jpg";
import poster5 from "./Assets/Slices/poster5.jpg";
export default function Page2({ page2data }) {
  return (
    <>
      {page2data?.page?.contentItems?.content.map((val, index) => {
        // console.log("sss", val["poster-image"]);
        var dataw = val["poster-image"];
        console.log("sss", dataw);
        return (
          <>
            {dataw === "poster4.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster4} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster5.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster5} />
                <p className="title">{val.name}</p>
              </div>
            ) : dataw === "poster6.jpg" ? (
              <div className="col-md-4 col-4 mt-4 d-flex flex-column">
                <img src={poster6} />
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
