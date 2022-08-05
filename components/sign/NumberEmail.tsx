import React, { FC, useState } from 'react';
import Button from '@components/button/Button';
export interface Props {
  containerClassName?: string;
  countryVal?: string;
  countryOnChange?: React.ChangeEventHandler;
  next: React.MouseEventHandler;
  previous?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler;
  onNumberChange?: React.ChangeEventHandler;
  value?: string;
  isEmail: boolean;
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>;
}
const NumberEmail = (prop: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    prop.setIsEmail(!prop.isEmail);
  };
  return (
    <form
      className={`h-[70%] w-full absolute left-0 right-0 flex justify-center items-center flex-col space-y-4 ${
        prop.containerClassName ? prop.containerClassName : ''
      }`}
    >
      <h5 className='font-poppins font-[700] text-2xl'>
        Whats your {prop.isEmail ? 'email' : 'phone number'}?
      </h5>
      {prop.isEmail ? (
        <input
          onChange={prop.onChange}
          value={prop.value}
          className='outline-none border border-midnight focus:border-black pl-3 h-12 w-[77.5%] md:w-[59%] font-montserrat'
          placeholder={'Enter your email here'}
          type={'email'}
        />
      ) : (
        <div className='border border-midnight focus:border-black h-12 w-[84.5%] md:w-[59%] font-montserrat flex justify-between items-center pl-3'>
          <span className='font-poppins flex'>+</span>
          <input
            type='text'
            maxLength={3}
            className='outline-none w-[15%] md:w-[5%] h-full bg-white border-r border-midnight font-poppins'
            onChange={prop.countryOnChange}
            value={prop.countryVal}
          />
          <input
            type={'text'}
            className='outline-none w-[95%] h-full bg-white font-poppins ml-5'
            onChange={prop.onNumberChange}
            value={prop.value}
            placeholder='Enter your phone number'
          />
        </div>
      )}
      <div className='flex gap-6'>
        {' '}
        <Button
          height={30}
          width={140}
          on={prop.isEmail ? true : false}
          fontWeight={prop.isEmail ? 600 : 400}
          onClick={handleClick}
          hover={false}
        >
          Email
        </Button>
        <Button
          height={30}
          width={140}
          on={prop.isEmail ? false : true}
          hover={false}
          fontWeight={prop.isEmail ? 400 : 600}
          onClick={handleClick}
        >
          Number
        </Button>
      </div>
      <div className='flex gap-6'>
        <Button height={30} width={140} hover={false} onClick={prop.previous}>
          Previous
        </Button>
        <Button
          height={30}
          width={140}
          on={true}
          fontWeight={600}
          onClick={prop.next}
          type='submit'
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default NumberEmail;
