import React, { FC, useState } from 'react';
import Uploady from '@rpldy/uploady';
import { asUploadButton } from '@rpldy/upload-button';
import UploadPreview, { PreviewType } from '@rpldy/upload-preview';
import { useRouter } from 'next/router';
const DivUploadButton = asUploadButton((props: any) => {
  return (
    <div {...props} className='flex items-center justify-center w-full'>
      <label
        htmlFor='dropzoneFile'
        className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <svg
            className='w-10 h-10 mb-3 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
            ></path>
          </svg>
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span> or drag and
            drop
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
      </label>
    </div>
  );
});
const Index = () => {
  //   const [value, setValue] = useState('');
  const [images, setImages] = useState(0);
  const router = useRouter();
  console.log(images)
  return (
    <div className='grid min-h-screen place-items-center mt-[37rem] lg:mt-[4rem] '>
      <div className='w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <div className='flex items-start'>
          <span
            className='lg:text-2xl text-[70px] font-[Montserrat] tracking-tight uppercase'
            style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
          >
            Can you share some pictures of your item?
          </span>
          <span className='w-0 text-xs font-[Poppins] text-gray-500'>
            pick⠀atleast⠀2
          </span>
        </div>
        <form className='mt-6 space-y-10'>
          <Uploady
            accept='image/*'
            destination={{ url: 'http://localhost:3000' }}
          >
              <DivUploadButton onClick={() => setImages(images + 1)} autoUpload={true} clearPendingOnAdd={true} method="POST" />
            <UploadPreview />
          </Uploady>
          <Uploady
            accept='image/*'
            destination={{ url: 'http://localhost:3000' }}
          >
            <DivUploadButton onClick={() => setImages(images + 1)} autoUpload={true} clearPendingOnAdd={true} method="POST" />

            <UploadPreview />
          </Uploady>
          <Uploady
            accept='image/*'
            destination={{ url: 'http://localhost:3000' }}
          >
              <DivUploadButton onClick={() => setImages(images + 1)} autoUpload={true} clearPendingOnAdd={true} method="POST" />
            <UploadPreview />
          </Uploady>
          <Uploady
            accept='image/*'
            destination={{ url: 'http://localhost:3000' }}
          >
<DivUploadButton onClick={() => setImages(images + 1)} autoUpload={true} clearPendingOnAdd={true} method="POST" />
            <UploadPreview />
          </Uploady>
          <button
            type='submit'
            className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg ml-0 lg:pr-3 pr-10 text-[50px] text-center'
            style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            onClick={(e) => {
              e.preventDefault();
              if (images > 1) return router.push('/sell/done');
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
