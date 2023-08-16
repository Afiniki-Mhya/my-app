import React from 'react';

const Page = () => {
  return (
    <div className='bg-[#d8dade] min-h-screen bg-cover flex pt-24 px-32 gap-40'>
      <div className='flex flex-col'>
        <h1 className='text-3xl font-bold pb-4'>Certifications</h1>
        <p className='text-justify break-all max-w-md'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
      
      {/* this is where your certificate goes */}
      <div className='border-4 rounded-tr-3xl rounded-bl-3xl w-96 h-60 border-fuchsia-600 p-4 items-center pt-10'>
        
      </div>
    </div>
  );
};

export default Page;
