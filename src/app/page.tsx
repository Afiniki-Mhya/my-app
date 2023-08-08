import React from "react";
import Image from "next/image";



export default function HomePage(){
  return(
    <div className=" bg-[#d8dade] bg-cover min-h-screen ">
      {/* LOGO, NAVIGATION TOOLS AND THE LOG BUTTONS */}
      <div className=" bg-[#d8dade] px-7 pt-7 pb-3 shadow-md shadow-[#6d6d6d]">
        <nav className=" flex flex-row justify-between ">
          <div className=" flex flex-row  ">
            <h1 className=" text-2xl font-bold ">N@sh Digital Unlocked</h1>
            <ul className=" flex flex-row pt-2 pl-10 gap-5">
              <li><a>Online Courses</a></li>
              <li><a>Certification</a></li>
              <li><a>Patners</a></li>
              <li><a>Remote Work</a></li>
              <li><a>More</a></li>
            </ul>
          </div>
          <div className=" flex justify-end gap-5 px-5  ">
            <button className=" text-fuchsia-600">Sign in</button>
            <button className=" bg-fuchsia-600 px-3 py-3 rounded-md text-white ">Register</button>
            {/* <registerPage /> */}
          </div>
        </nav>
      </div>
      {/* HERO */}
      <div className=" flex flex-row justify-between px-20 py-24 ">
      {/* HERO TEXT, PARAGRAPH AND BUTTON */}
      <div className=" flex flex-col pt-28  "> 
      <h1 className=" text-2xl font-semibold pb-6 ">Fundamentals Of Lorem Ipsum</h1>
      <p className=" text-sm pb-3 ">Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry.</p>
      <button className="  bg-fuchsia-600 w-32 h-12 rounded-md text-white  ">Start Course</button>
     </div>
      {/* HERO SVG */}
      <Image  src="/undraw_cowork.svg" alt="" width={600} height={200}></Image>
        </div>
        <hr className=" mt-28 border-gray-350 "></hr>
        {/*  DETAILS AT THE BUTTOM OF THE PAGE */}
        <div>
          {/* PUT THE DETAILS FOR THE BUTTOM OF THE PAGE HERE */}
        </div>
    </div>
  );
}