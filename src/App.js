import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Suspense, lazy } from "react";
import search_icon from "./Assets/Slices/search.png";

// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
import back_icon from "./Assets/Slices/Back.png";
import {
  setalldata,
  selectalladata,
  setpagedata,
  setpage2data,
  setpage3data,
  setpagesec,
} from "./features/counter/counterSlice";
import { LoadingPosts } from "./LoadingPosts";
import CONTENTLISTINGPAGE from "./API/CONTENTLISTINGPAGE-PAGE1.json";
import CONTENTLISTINGPAGE2 from "./API/CONTENTLISTINGPAGE-PAGE2.json";
import CONTENTLISTINGPAGE3 from "./API/CONTENTLISTINGPAGE-PAGE3.json";
import { useDispatch, useSelector } from "react-redux";
const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));
const Page3 = React.lazy(() => import("./Page3"));
function App() {
  const dispatch = useDispatch();
  const alldata = useSelector(selectalladata);
  const page2data = useSelector(setpagedata);
  const page3data = useSelector(setpagesec);
  console.log("33", page3data);
  useEffect(() => {
    dispatch(setalldata(CONTENTLISTINGPAGE));
    dispatch(setpage2data(CONTENTLISTINGPAGE2));
    dispatch(setpage3data(CONTENTLISTINGPAGE3));
  }, []);
  const enableSearch = () => {
    document.getElementById("search_field").style.display = "block";
    // setSearchInput(true);
  };

  const URL = "./Assets/Slices";
  return (
    <div className="App">
      <div className="header pt-3 pe-3 ps-3 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img src={back_icon} className="back_icon" />
          <h3 className="m-2 text-light">{alldata?.page?.title}</h3>
        </div>
        <div className="d-flex align-items-center">
          {/* {!searchInput && ( */}
          <input type="text" className="search_field" id="search_field" />
          {/* )} */}
          <input type="text" className="search_field" id="search_field" />
          <img src={search_icon} className="back_icon" onClick={enableSearch} />
        </div>
      </div>
      <div className="row main_div">
        <Suspense fallback={<LoadingPosts />}>
          <Page1 alldata={alldata} />
          <Page2 page2data={page2data} />
          <Page3 page3data={page3data} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
