import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrNext } from 'react-icons/gr';

const Page = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#d8dade] bg-cover min-h-screen'>
      {/* Left side */}
      <div className='flex flex-col md:w-1/4 bg-fuchsia-600 p-4 md:p-6'>
        <div className='flex justify-center'>
          <img
            src='your-profile-picture-url.jpg'
            alt='Profile Picture'
            className='w-32 h-32 rounded-full border-4 border-white'
          />
        </div>
        <div className='flex flex-row justify-center items-center gap-3 pt-4'>
          <button><BiEditAlt className='text-white' /></button>
          <button><RiDeleteBin6Line className='text-white' /></button>
        </div>
        <div className='flex flex-col mt-4 md:mt-20'>
          <button className='flex justify-between bg-transparent px-4 py-2 mb-2 md:mb-7 rounded-md text-white hover:bg-[#d8dade] hover:text-black'>
            Account <GrNext className='text-fuchsia-600 hover:text-black' />
          </button>
          <button className='flex justify-between bg-transparent px-4 py-2 rounded-md text-white hover:bg-[#d8dade] hover:text-black'>
            Certifications <GrNext className='text-fuchsia-600 hover:text-black' />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className='flex flex-col md:w-3/4 py-4 md:py-20 gap-4 md:gap-12'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl md:text-2xl font-bold'>Account</h1>
          <p className='text-gray-600 text-xs pb-4 md:pb-12'>Manage your account information</p>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row'>
              <div className='bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-2 md:mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm p-2 w-full'
                  type='text'
                  name='first name'
                  placeholder='First Name'
                />
              </div>
              <div className='bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-2 md:mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm p-2 w-full'
                  type='text'
                  name='last name'
                  placeholder='Last Name'
                />
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-2 md:mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm p-2 w-full'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-2 md:mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm p-2 w-full'
                  type='text'
                  name='username'
                  placeholder='Username'
                />
              </div>
            </div>
            <div className='bg-[#d8dade] w-full md:w-96 p-1 flex items-center rounded-md'>
              <textarea
                className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm w-full h-20 p-2'
                name='description'
                placeholder='Description'
              />
            </div>
            <div className='flex justify-center'>
              <div className='flex gap-4'>
                <button className='bg-white px-4 py-2 my-2 md:my-6 rounded-md text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white'>
                  Cancel
                </button>
                <button className='bg-fuchsia-600 px-6 py-2 my-2 md:my-6 rounded-md text-white hover:bg-white hover:text-fuchsia-600'>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
