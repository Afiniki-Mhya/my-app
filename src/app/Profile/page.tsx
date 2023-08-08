import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

const page = () => {
  return (
    <div className='flex justify-center py-28 bg-[#d8dade] bg-cover min-h-screen'>
      <div className='flex flex-row gap-96'>
        <div className='flex flex-col'>
          {/* <Image></Image> */}
          <BiEditAlt className='text-fuchsia-600' />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl font-bold'>Account</h1>
          <p className='text-gray-600 text-xs pb-8'>Manage your account information</p>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row'>
              <div className='bg-[#d8dade] w-64 p-1 flex items-center mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm'
                  type='text'
                  name='first name'
                  placeholder='First Name'
                />
              </div>
              <div className='bg-[#d8dade] w-64 p-1 flex items-center mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm'
                  type='text'
                  name='last name'
                  placeholder='Last Name'
                />
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='bg-[#d8dade] w-64 p-1 flex items-center mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </div>

              <div className='bg-[#d8dade] w-64  p-1 flex items-center mb-1 rounded-md'>
                <input
                  className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm'
                  type='text'
                  name='username'
                  placeholder='username'
                />
              </div>
            </div>

            <div className='bg-[#d8dade] w-96 p-1 flex items-center mb-1 rounded-md'>
              <textarea
                className='outline-double outline-fuchsia-600 bg-[#d8dade] text-sm rounded-sm w-96 h-20'
                name='description'
                placeholder='Description'
              />
          </div>
          <div className=' flex flex-row gap-10 justify-center items-center '>
                 <button className=" bg-white px-4 py-2 my-6 rounded-md text-fuchsia-600 ">Cancel</button>
                 <button className=" bg-fuchsia-600 px-6 py-2 my-6 rounded-md text-white ">Done</button>
               </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
