import Template from '@components/sign/template';
import React, { useState } from 'react';
import Button from '@components/button/Button';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
export interface Props {
  containerClassName?: string;
  next?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler;
  previous?: React.MouseEventHandler;
  value: string | undefined;
}
const Password = (prop: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <form
    onSubmit={(e) => e.preventDefault()}
      className={`h-[70%] w-full absolute left-0 right-0 flex justify-center items-center flex-col space-y-4 ${
        prop.containerClassName ? prop.containerClassName : ''
      }`}
    >
      <h5 className='font-poppins font-[700] text-3xl'>Enter your password</h5>
      <div className=' border border-midnight focus:border-black px-5 h-12 w-[77.5%] md:w-[59%] font-montserrat flex justify-between items-center'>
        <input
          type={open ? 'text' : 'password'}
          className='outline-none w-[88%] md:w-[95%] h-full'
          placeholder='Enter your password here'
          onChange={prop.onChange}
          value={prop.value}
        />
        <button type="submit" onClick={() => setOpen(!open)}>
          {open ? (
            <EyeIcon height={25} width={25} strokeWidth={1} />
          ) : (
            <EyeOffIcon height={25} width={25} strokeWidth={1} />
          )}
        </button>
      </div>
      <div className='flex space-x-6'>
        <Button
          height={30}
          width={140}
          hover={false}
          onClick={prop.previous}
        >
          Previous
        </Button>
            <Button onClick={prop.next} height={30} width={140} on={true} fontWeight={600}>
              Next
            </Button>
      </div>
    </form>
  );
};

export default Password;
