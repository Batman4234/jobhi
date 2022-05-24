import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@components/button/Button';
import { EyeIcon, EyeOffIcon, ThumbUpIcon } from '@heroicons/react/outline';
import axios from 'axios';
const Index = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [done, setDone] = useState(false);
  if (done) {
    axios.post('/api/sign/user/create', {
      name,
      nickname,
      phone,
      password,
      address,
    });
  }
  return (
    <>
      <div className={`mt-52 md:mt-32 ${page === 0 ? 'block' : 'hidden'}`}>
        <div className='flex bg-sky border border-midnight py-24 justify-center'>
          <div className='p-12 text-center max-w-2xl'>
            <div className='md:text-3xl text-[4rem] font-[Poppins]'>
              Start Signing Up
            </div>
            <div>
              <Button width={200} onClick={() => setPage(1)} className='ml-5'>
                let{"'"}s start
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`min-h-screen place-items-center mt-[37rem] lg:mt-0 ${
          !done && page > 0 ? 'grid' : 'hidden'
        }`}
      >
        <div
          className={`w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat] ${
            page > 5 && 'hidden'
          }`}
        >
          <div className='flex'>
            <span
              className='lg:text-2xl text-[70px] font-[Montserrat] tracking-tight uppercase'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
            >
              {(page === 2 && ' Nickname?') ||
                (page === 3 && 'Enter your phone number') ||
                (page === 4 && 'Enter A Password') ||
                (page === 5 && 'Enter the address for orders?') ||
                (page === 1 && 'Enter your name')}
            </span>
            <span className='flex ml-2 text-gray-400 text-[40px]  lg:text-sm'>
              {(page === 2 && 'optional') || (page === 5 && 'private')}
            </span>
          </div>
          <form className='mt-6'>
            <div
              className={` ${
                page === 4
                  ? 'flex w-full p-3 mt-2 text-gray-700 focus:outline-none bg-sky border border-midnight rounded-sm items-center'
                  : ''
              } `}
            >
              <input
                type={
                  page === 3
                    ? 'number'
                    : `${
                        page === 4
                          ? `${passwordOpen ? 'text' : 'password'}`
                          : 'text'
                      }`
                }
                placeholder={
                  (page === 2 && 'Your Nickname Here') ||
                  (page === 3 && 'Enter your phone number here') ||
                  (page === 5 && 'Address For Orders') ||
                  (page === 1 && 'Your Name Here') ||
                  ''
                }
                value={
                  (page === 1 && name) ||
                  (page === 2 && nickname) ||
                  (page === 3 && phone) ||
                  (page === 4 && password) ||
                  address
                }
                onChange={(e) => {
                  if (page === 1) {
                    setName(e.target.value);
                  } else if (page === 2) {
                    setNickname(e.target.value);
                  } else if (page === 3) {
                    setPhone(e.target.value);
                  } else if (page === 4) {
                    setPassword(e.target.value);
                  } else {
                    setAddress(e.target.value);
                  }
                }}
                className={` ${
                  page === 4
                    ? 'w-full outline-none lg:p-0 mt-6 p-6 text-[50px] lg:text-base lg:mt-0 text-gray-700 bg-sky  focus:outline-none rounded-sm'
                    : 'block w-full lg:p-3 mt-6 p-6 text-[50px] lg:text-sm lg:mt-2 text-gray-700 bg-sky border border-midnight'
                } focus:outline-none rounded-sm`}
                style={{
                  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
                }}
              />
              <div className={`${page === 4 ? 'block' : 'hidden'} mr-1`}>
                <button
                  type='button'
                  className='flex'
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordOpen(!passwordOpen);
                  }}
                >
                  {passwordOpen ? (
                    <EyeIcon
                      className='h-[80px] w-[80px] lg:h-[24px] lg:w-[24px]'
                      strokeWidth={0.7}
                    />
                  ) : (
                    <EyeOffIcon
                      className='h-[80px] w-[80px] lg:h-[24px] lg:w-[24px]'
                      strokeWidth={0.7}
                    />
                  )}
                </button>
              </div>
            </div>
            <button
              type='submit'
              className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg ml-0 lg:pr-3 pr-10 text-[50px] text-center'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              onClick={(e) => {
                e.preventDefault();
                switch (page) {
                  case 1:
                    if (name.trim() !== '') return setPage(page + 1);
                    break;
                  case 2:
                    if (nickname.trim() !== '') return setPage(page + 1);
                    break;
                  case 3:
                    if ((phone)) return setPage(page + 1);
                    break;
                  case 4:
                    if (password.trim().length >= 8) return setPage(page + 1);
                    break;
                  case 5:
                    if (address.trim() !== '') {
                      return setDone(true);
                    }
                    break;
                  default:
                    break;
                }
              }}
            >
              next
            </button>
            <button
              type='submit'
              className='w-full py-8 lg:py-3 mt-10 lg:mt-6 pl-20 lg:pl-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm lg:text-lg ml-0 lg:pr-3 pr-10 text-[50px] text-center'
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              previous
            </button>
          </form>
        </div>
      </div>
      <div
        className={`${
          done ? 'grid' : 'hidden'
        } min-h-screen place-items-center lg:mt-0 mt-[900px] `}
      >
        <div className='bg-sky w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12 font-[Montserrat] grid place-items-center'>
          <div className='flex items-center gap-10 lg:gap-2'>
            <span
              style={{ transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)' }}
              className='flex text-[250px] lg:text-[70px] font-[Montserrat] tracking-tight font-extralight uppercase'
            >
              Otp
            </span>
          </div>
          <div>
            <div className='flex space-x-20 mt-10 ml-10'>
              <div className="">
                <input name="otp" id="otp" className="border border-midnight w-10 text-[40px] font-[Montserrat] text-center h-10 outline-none" maxLength={1}/>
              </div>
              <div className="">
                <input name="otp" id="otp" className="border border-midnight w-10 text-[40px] font-[Montserrat] text-center h-10 outline-none" maxLength={1}/>
              </div>
              <div className="">
                <input name="otp" id="otp" className="border border-midnight w-10 text-[40px] font-[Montserrat] text-center h-10 outline-none" maxLength={1}/>
              </div>
              <div className="">
                <input name="otp" id="otp" className="border border-midnight w-10 text-[40px] font-[Montserrat] text-center h-10 outline-none" maxLength={1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
