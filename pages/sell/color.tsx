import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Combobox, Transition } from '@headlessui/react';
import { styled } from '@stitches/react';
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
const IOButton = styled('button', {
  marginRight: '6px',
  '@media only screen and (max-width:600px)': {
    marginRight: '20px',
  },
});
const Index = () => {
  const [value, setValue] = useState('');
  const [current, setCurrent] = useState('');
  const router = useRouter();
  const color = ['red', 'green', 'blue'];
  const filtered = color.filter((category) =>
    category
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(value.toLowerCase().replace(/\s+/g, ''))
  );
  const onClickDelete = () => {
    setValue('');
  };
  return (
    <div className='grid min-h-screen place-items-center mt-[37rem] lg:mt-0 '>
      <div className='w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat]'>
        <span
          className='lg:text-2xl text-[70px] font-[Montserrat] tracking-tight uppercase'
          style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
        >
          Choose The Color Of Your $Item.
        </span>
        <form className='mt-6'>
          <Combobox value={current} onChange={setCurrent}>
            <div className='flex justify-between w-full  mt-6 lg:p-1  lg:mt-2  bg-sky border border-midnight rounded-sm'>
              <Combobox.Input
                autoComplete='off'
                onChange={(e) => {
                  setValue(e.target.value)
                  console.log(current);
                }}
                className='w-[93.8%] outline-none h-18 p-[8px] text-[50px] lg:text-sm  pl-6 md:pl-[8px] capitalize text-midnight'
              />
              <IOButton type='reset' onClick={onClickDelete}>
                <DoubleArrowLeftIcon className='h-16 w-16 md:h-4 md:w-4' />
              </IOButton>
            </div>
            {value.trim() !== '' && (
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Combobox.Options className='block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight focus:outline-none rounded-sm'>
                  {filtered.length === 0 && value.trim() !== '' ? (
                    <div className='relative cursor-default select-none py-2 px-4 text-midnight font-bold font-[Poppins]'>
                      Nothing found.
                    </div>
                  ) : (
                    filtered.map((color) => (
                      <Combobox.Option
                        className={({ active }) =>
                          `border border-midnight w-full md:p-3 p-7 md:pl-3 pl-10 text-midnight font-[800] capitalize bg-sky ${
                            active
                              ? 'bg-midnight text-sky'
                              : 'text-midnight bg-sky'
                          }`
                        }
                        key={color}
                        value={color}
                      >
                        {color}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            )}
          </Combobox>

          <button
            type='submit'
            className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg ml-0 lg:pr-3 pr-10 text-[50px] text-center'
            style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            onClick={(e) => {
              e.preventDefault();
              if (current.trim() !== '') return router.push('/sell/images');
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
