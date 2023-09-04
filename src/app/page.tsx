import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-[#d8dade] bg-cover min-h-screen">
      {/* LOGO, NAVIGATION TOOLS, AND THE LOG BUTTONS */}
      <div className="bg-[#d8dade] px-4 md:px-7 pt-7 pb-3 shadow-md shadow-[#6d6d6d]">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-0">N@sh Digital Unlocked</h1>
            <ul className="flex flex-row pt-2 md:pt-0 md:pl-10 gap-5">
              <li><a>Online Courses</a></li>
              <li><a>Certification</a></li>
              <li><a>Partners</a></li>
              <li><a>Remote Work</a></li>
              <li><a>More</a></li>
            </ul>
          </div>
          <div className="flex justify-center items-center md:justify-end gap-5 pt-4 md:pt-0">
            <button className="text-fuchsia-600">Sign in</button>
            <button className="bg-fuchsia-600 px-3 py-2 rounded-md text-white">Register</button>
            {/* <registerPage /> */}
          </div>
        </nav>
      </div>
      {/* HERO */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 py-12 md:py-24">
        {/* HERO TEXT, PARAGRAPH, AND BUTTON */}
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-lg md:text-2xl font-semibold pb-3">Fundamentals Of Lorem Ipsum</h1>
          <p className="text-sm md:text-base pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="bg-fuchsia-600 w-full md:w-32 h-10 md:h-12 rounded-md text-white">Start Course</button>
        </div>
        {/* HERO SVG */}
        <div className="md:w-1/2 md:ml-6">
          <Image src="/undraw_cowork.svg" alt="" width={600} height={200} />
        </div>
      </div>
      <hr className="border-gray-350" />
      {/* DETAILS AT THE BOTTOM OF THE PAGE */}
      <div>
        {/* PUT THE DETAILS FOR THE BOTTOM OF THE PAGE HERE */}
      </div>
    </div>
  );
}
