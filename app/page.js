import React from "react";
import Spline from "@splinetool/react-spline/next";
import Link from 'next/link';
function page() {
  return (
    <>
      <style>
        {`
          .hide-watermark {
            height: 50px;
    top: 100%;
    right: 0;
    position: absolute;
    width: 200px;
    background-color: #050505;
    z-index: 52;
          }
        `}
      </style>
      <div className="h-screen bg-[#050505]">
        <div className="hide-watermark"></div>
        {/* <Link href="/Cars" className="absolute left-[47%]">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Get Cars</span>
        </Link> */}
        <Spline
        scene="https://prod.spline.design/oDZzmPllyG6LA0Zd/scene.splinecode" 
      />
      </div>
    </>
  );
}

export default page;
