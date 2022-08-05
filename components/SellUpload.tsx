import Image from 'next/image';
import React, { useState } from 'react'
import Button from './button/Button'
export interface Props {
    containerClassName: string
  href?: React.MouseEventHandler;
  previous?: React.MouseEventHandler;
  onSelect?: React.ReactEventHandler<HTMLInputElement>;
  files: FileList;
}
const SellUpload = (prop: Props) => {
  const arrayFile = Array.from(prop.files ? prop.files : [])
  const ffile = arrayFile.length > 4  ? arrayFile.splice(4): arrayFile
  console.log(arrayFile.length)
  return (
    <div className={`h-[85%] w-full absolute left-0 right-0 flex justify-center items-center flex-col space-y-7 ${prop.containerClassName ? prop.containerClassName : ''}`}>
      <h5 className='font-poppins font-[700] text-3xl flex gap-2 text-center'>
        Select some pictures of your product
      </h5>
    <div className={`flex items-center justify-center w-[30%] `}>
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-midnight rounded-lg cursor-pointer bg-white hover:bg-gray-100" style={{transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)'}}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG</p>
        </div>
        <input id="dropzone-file" type={"file"} accept={"image/*"} multiple className="hidden" onChange={prop.onSelect}  />
    </label>
</div> 
<div className='flex gap-4'>
{
  (arrayFile.length ) && arrayFile.map((file:File) => {
    const src = URL.createObjectURL(file)
    return (
   <>
   <Image
   key={file.name}
    width={100}
    height={100}
    objectFit="cover"
    src={src}
    alt="Preview"
   />
   </>
    )
  })
}  
</div>
<div className='flex gap-6'>
<Button  height={30} width={140} hover={false} onClick={prop.previous}>Previous</Button>
      <Button height={30} width={140} on={true} fontWeight={600} onClick={prop.href} type="submit" >Next</Button>
</div>
</div>

  )
}

export default SellUpload