import { useRef,useEffect } from "react";
import clsx from "clsx";
import useLazyLoad from "./useLazyLoad";
import { Card } from './Card';
import { LoadingPosts } from './LoadingPosts';
// import posts from './data.json';
import { setalldata, selectalladata } from "./features/counter/counterSlice";
import CONTENTLISTINGPAGE from "./API/CONTENTLISTINGPAGE-PAGE1.json";
import { useDispatch, useSelector } from "react-redux";
const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 2;

export const Posts = () => {
     const dispatch = useDispatch();
  const alldata = useSelector(selectalladata);

  console.log("Err", JSON.stringify(CONTENTLISTINGPAGE));
  
  useEffect(() => {
    dispatch(setalldata(CONTENTLISTINGPAGE));
  }, []);
    // const images = posts["data"];
    console.log("Err", JSON.stringify(CONTENTLISTINGPAGE));
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        // return new Promise((resolve) => {
        // setTimeout(() => {
        //     const data = images.slice(
        //     ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
        //     NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
        //     );
        //     console.log(data);
        //     resolve(data);
        // }, 3000);
        // });
    };
    // const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    return (
        <>
        {/* <div className="grid grid-cols-3 gap-4 content-start">
        {data.map(image => {
            return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />
        })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div> */}
        </>
    );
}