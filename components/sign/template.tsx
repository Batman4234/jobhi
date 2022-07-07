import Button from '@components/button/Button';
import React from 'react'

interface Props {
  placeholder?: string;
  question?: string;
  type?: string;
}

const Template = (prop: Props) => {
  return (
    <div className='h-[70%] w-full absolute left-0 right-0 flex justify-center items-center flex-col space-y-4'>
      <h5 className='font-poppins font-[700] text-3xl'>{prop.question}</h5>
      <input
      className='outline-none border border-midnight focus:border-black pl-3 h-12 w-[77.5%] md:w-[69%] font-montserrat'
      placeholder={prop.placeholder}
      type={prop.type ? prop.type : 'text'}
      />
      <div className="flex space-x-6">    
      <Button height={30} width={140} hover={false}>Previous</Button>
      <Button height={30} width={140} on={true} fontWeight={600}>Next</Button> </div>
    </div>
  )
}

export default Template