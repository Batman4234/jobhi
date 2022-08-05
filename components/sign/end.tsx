import {
  ConfirmationResult,
} from 'firebase/auth';
import Button from '@components/button/Button';
import React, { useEffect, useState } from 'react';
import Input from 'react-otp-input';
import {useAuth} from '@lib/Auth';
import { useRouter } from 'next/router';
import ToastFunction from '@components/toast';
export interface Credential {
  name: string;
  number: string;
  address: string;
  isEmail: boolean;
  countryCode: string;
}
export interface Props {
  containerClassName?: string;
  previous?: React.MouseEventHandler;
  credentials: Credential;
}
declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResults: ConfirmationResult;
  }
}

const End = (prop: Props) => {
  const [value, setValue] = useState<string>('');
  const [panel, setPanel] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false)
  const auth = useAuth();
  const router = useRouter()
  const [clickedResend, setClickedResend] = useState<boolean>();
  const handleChange = (e: string) => {
    setValue(e);
  };
  const SignInNumber = () => {
    const number = '+' + prop.credentials.countryCode + prop.credentials.number;
    auth.signInNumber(number);
  };
  const handleResend = () => {
    setClickedResend(true)
    setTimeout(() => {
      setClickedResend(false)
    }, 60 * 1000);
    SignInNumber();
  };
  const confirmHandler = () => {
    if (value.length === 6) {
      auth.confirmCode(value, prop.credentials.name, prop.credentials.address, prop.credentials.isEmail ? prop.credentials.number : `+${prop.credentials.countryCode}${prop.credentials.number}`).then(() => {
        router.reload()
      })
    }
  }
  const signInEmail = async () => {
    auth.sendLinkEmail(prop.credentials.number)
  };
  const handleSend = async (e: any) => {
    e.preventDefault();
    setOpen(true)
      setClicked(true);
     auth.setCredentials({
      name: prop.credentials.name,
      address: prop.credentials.address
    })
    localStorage.setItem('name', prop.credentials.name)
    localStorage.setItem('address', prop.credentials.address)
    if (prop.credentials.isEmail) {
      signInEmail();
      setTimeout(() => {
        setClicked(false)
      }, 60 * 100);
    } else {
      setPanel(true); 
      SignInNumber()
    }  
  };
  return (
    <>
      <div
        className={`h-[70%] w-full absolute left-0 right-0 flex flex-col justify-center items-center  gap-5 ${
          prop.containerClassName ? prop.containerClassName : ''
        }`}
      >
        <h5 className='font-poppins font-[700] text-3xl'>
          Send Verification Message
        </h5>
        <div className='flex gap-4'>
          <Button height={30} width={140} onClick={prop.previous} hover={false} on={clicked ? true : false} fontWeight={clicked ? 600 : 400}>
            Previous
          </Button>
          <Button
            height={30}
            width={140}
            onClick={handleSend}
            on={clicked ? false : true}
            fontWeight={clicked ? 400 : 600}
            type='button'
            disabled={clicked ? true : false}
            >
            Send
          </Button>
        </div>
        <div
          className={`justify-center items-center space-y-5 ${
            panel ? 'flex flex-col' : 'hidden'
          }`}
        >
          <Input
            numInputs={6}
            containerStyle={'flex space-x-6'}
            inputStyle={{
              border: '1px solid #171717',
              outline: 'none',
              height: '35px',
              width: '35px',
              fontSize: '17px',
              fontFamily: 'Poppins',
            }}
            value={value}
            onChange={handleChange}
            isInputNum={true}
          />
          <div className='flex gap-4'>
            <Button height={30} width={140} onClick={confirmHandler} on={clickedResend ? true : false}>
              Confirm
            </Button>
            <Button height={30} width={140} on={clickedResend ? false : true} onClick={handleResend} disabled={clickedResend ? true : false}>
              Resend
            </Button>
          </div>
        </div>
      </div>
      <div id='recaptcha-container' />
      <ToastFunction duration={5000} open={open} onOpenChange={setOpen} title={prop.credentials.isEmail ? 'Email Sent' : 'OTP Sent'} description={prop.credentials.isEmail ? `Sent Email To ${prop.credentials.number}` : `Sent OTP To ${prop.credentials.countryCode } ${prop.credentials.number}}`}/>
    </>
  );
};

export default End;
