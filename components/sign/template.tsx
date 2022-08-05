import Button from '@components/button/Button';
import React from 'react';
interface Props {
  containerClassName?: string;
  href?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler
  previous?: React.MouseEventHandler;
  placeholder?: string;
  question?: string;
  type?: string;
  value?: string | number | undefined;
  optional?: string
}

const Template = (prop: Props) => {
  return (
    <form className={`h-[70%] w-full absolute left-0 right-0 flex justify-center items-center flex-col space-y-4 ${prop.containerClassName ? prop.containerClassName : '' }`}>
      <h5 className='font-poppins font-[700] text-3xl flex gap-2 text-center'>    {prop.question}  {prop.optional && (
      <span className='font-montserrat font-[400] text-xs flex self-start'>{prop.optional}</span>
      )}</h5>

      <input
      onChange={prop.onChange}
      value={prop.value}
      className='outline-none border border-midnight focus:border-black pl-3 h-12 w-[77.5%] md:w-[59%] font-montserrat'
      placeholder={prop.placeholder}
      type={prop.type ? prop.type : 'text'}
      />
      <div className="flex gap-6">    
      <Button  height={30} width={140} hover={false} onClick={prop.previous}>Previous</Button>
      <Button height={30} width={140} on={true} fontWeight={600} onClick={prop.href} type="submit" >Next</Button>
      </div>
    </form>
  )
}

export default Template