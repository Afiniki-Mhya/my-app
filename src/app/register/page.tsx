import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsEnvelope } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md';

const Page = () => {
  return (
    <div className="bg-[#d8dade] min-h-screen pl-56 bg-contain w-full flex flex-col flex-1 justify-center">
      {/* THE SIGN IN TEXT FIELDS SECTION */}
      <div className="flex flex-col md:flex-row  gap-4 bg-white rounded-md m-4 md:m-8 shadow-md w-full md:w-2/3 shadow-[#2d2c2c]">
        <div className="w-full md:w-3/5 p-3">
          {/* COMPANY LOGO */}
          <h1 className="text-xl md:text-2xl font-bold">N@sh Digital</h1>
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-center text-sm mb-3">Sign in to Account</h1>
            <div className="border-2 w-10 border-fuchsia-600 item-center mb-4 rounded-sm"></div>
            {/* SOCIAL MEDIA SIGN IN ICONS */}
            <div className="flex flex-row gap-4 justify-center items-center">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FcGoogle />
              </a>
            </div>
          </div>
          {/* THE SIGN IN TEXT FIELDS */}
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* EMAIL TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <BsEnvelope className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="email"
                name="email"
                placeholder="Email"
              ></input>
            </div>
            {/* PASSWORD TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <MdPassword className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="password"
                name="password"
                placeholder="Password"
              ></input>
            </div>
            {/* CONFIRM PASSWORD TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <MdPassword className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="password"
                name="password"
                placeholder="Confirm Password"
              ></input>
            </div>
          </div>
          {/* FORGOT PASSWORD */}
          <a href="#" className="flex justify-end md:ml-24 items-center w-full md:w-64 text-xs">
            Forgot Password?
          </a>
          {/* SIGN UP BUTTON */}
          <div className="flex justify-center items-center">
            <button className="bg-fuchsia-600 px-4 py-2 my-6 rounded-md text-white">Sign up</button>
          </div>
        </div>

        {/* THE SHORT SIGN IN MESSAGE SECTION */}
        <div className="w-full md:w-2/5 bg-fuchsia-600 text-white rounded-r-md py-4 md:py-36 px-4 md:px-12 flex flex-col items-center justify-center">
          <p className="text-lg md:text-2xl font-bold mb-2">Hello, Friend!</p>
          <div className="border-2 w-10 border-white item-center mb-4 rounded-sm"></div>
          <p className="text-center text-sm">Fill up your personal information and start an exciting journey with us.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
