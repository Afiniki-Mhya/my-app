import React from 'react';

const Page = () => {
  return (
    
      <div className='bg-[#d8dade] min-h-screen bg-cover flex flex-col md:flex-row md:justify-center md:items-center px-4 md:px-32 gap-4 md:gap-10'>
        <div className='flex flex-col text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold pb-4'>Certifications</h1>
          <p className='text-justify break-all max-w-md'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>

        {/* This is where your certificate goes */}
        <div className='w-full md:w-96 h-60 bg-white border-4 rounded-tr-3xl rounded-bl-3xl border-fuchsia-600 p-4 items-center pt-10'>
          {/* Content for the certificate */}
        </div>
      </div>
    
  );
};

export default Page;
