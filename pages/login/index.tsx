import React, { CSSProperties, useEffect, useState } from 'react';
import Button from '@components/button/Button';
import Link from 'next/link';
import Input from 'react-otp-input';
import { useRouter } from 'next/router';
import { useAuth } from '@lib/Auth';
import { styled, keyframes } from '@stitches/react';
import { slate } from '@radix-ui/colors';
import * as ToastPrimitive from '@radix-ui/react-toast';
import Loader from 'react-spinners/PropagateLoader'
import ToastFunction from '@components/toast';
import Head from 'next/head';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100%))` },
  to: { transform: 'translateX(var(--radix-toast-swipe-move-x))' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-move-x))' },
  to: { transform: `translateX(calc(100%))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

const StyledToast = styled(ToastPrimitive.Root, {
  borderRadius: 2,
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',
  border: '1px solid #171717',
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 0ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 0ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 0ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 0ms ease-out forwards`,
    },
  },
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  color: slate.slate12,
  fontFamily: 'Poppins',
  fontSize: 15,
  fontWeight: 500,
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  fontFamily: 'Poppins',
  color: slate.slate11,
  fontSize: 13,
  lineHeight: 1.3,
});

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;

const FormOne = (prop: {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  countryVal: string;
  setCountryVal: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isEmail: boolean;
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const auth = useAuth();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    prop.setIsEmail(!prop.isEmail);
  };
  const onNumberChange = (e: React.ChangeEvent) => {
    var reg = RegExp(/^-?\d*\.?\d*$/);
    const untitled = (e.target as HTMLInputElement).value;
    if (reg.test(untitled)) {
      prop.setValue((e.target as HTMLInputElement).value);
    }
  };
  const HandleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    var reg = RegExp(/^-?\d*\.?\d*$/);
    if (
      prop.value.trim() !== '' &&
      (prop.isEmail ? prop.value.includes('@') : reg.test(prop.value))
    ) {
      prop.setState(prop.state + 1);
    }
  };
  return (
    <form
      className={`h-[70%] w-full absolute left-0 right-0 justify-center items-center flex-col space-y-4 ${
        prop.state === 1 ? 'hidden' : 'flex'
      }`}
    >
      <h5 className='font-poppins font-[700] text-2xl'>Welcome Back!</h5>
      {prop.isEmail ? (
        <input
          onChange={(e) => prop.setValue(e.target.value)}
          value={prop.value}
          className='outline-none border border-midnight focus:border-black pl-3 h-12 w-[77.5%] md:w-[59%] font-montserrat'
          placeholder={'Enter the email linked to your account'}
          type={'email'}
        />
      ) : (
        <div className='border border-midnight focus:border-black h-12 w-[84.5%] md:w-[59%] font-montserrat flex justify-between items-center pl-3'>
          <span className='font-poppins flex'>+</span>
          <input
            type='text'
            maxLength={3}
            className='outline-none w-[15%] md:w-[5%] h-full bg-white border-r border-midnight font-poppins'
            onChange={(e) => {
              var reg = RegExp(/^-?\d*\.?\d*$/);
              const untitled = (e.target as HTMLInputElement).value;
              if (reg.test(untitled)) {
                prop.setCountryVal((e.target as HTMLInputElement).value);
              }
            }}
            value={prop.countryVal}
          />
          <input
            type={'text'}
            className='outline-none w-[95%] h-full bg-white font-poppins ml-5'
            onChange={onNumberChange}
            value={prop.value}
            placeholder='Enter the phone number linked to your account'
          />
        </div>
      )}
      <div className='flex gap-6'>
        <Button
          height={30}
          width={140}
          hover={false}
          on={prop.isEmail ? true : false}
          fontWeight={prop.isEmail ? 600 : 400}
          onClick={handleClick}
        >
          Email
        </Button>
        <Button
          height={30}
          width={140}
          fontWeight={prop.isEmail ? 400 : 600}
          hover={false}
          on={prop.isEmail ? false : true}
          onClick={handleClick}
        >
          Number
        </Button>
      </div>
      <div className='flex'>
        <Button
          height={30}
          width={140}
          fontWeight={600}
          onClick={HandleNext}
          type='submit'
        >
          Next
        </Button>
      </div>
      <div className='flex'>
        <Link href='/sign'>
          <a className='font-poppins font-[700] text-lg text-[#5A5555]'>
            Don&apos;t have an account?
          </a>
        </Link>
      </div>
    </form>
  );
};
const FormTwo = (prop: {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  countryCode: string;
  value: string;
  isEmail: boolean;
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [panel, setPanel] = useState<boolean>();
  const [clicked, setClicked] = useState<boolean>();
  const [clickedResend, setClickedResend] = useState<boolean>();
  const [value, setValue] = useState<string>('');
  const auth = useAuth();
  const handleChange = (e: string) => {
    setValue(e);
  };
  const confirmHandler = async (e: React.MouseEvent) => {
    auth.loginConfirmCode(value)
  };
  const signIn = () => {
    const number = '+' + prop.countryCode + prop.value;
    auth.signInNumber(number).then(() => {
      prop.setOpen(true)
    })
  };
  const handleResend = () => {
    setClickedResend(true);
    setTimeout(() => {
      setClickedResend(false)
    }, 60 * 1000);
      signIn();
  };
  const handleSend = async (e: any) => {
    e.preventDefault();
    setClicked(true);
    if (prop.isEmail) {
      auth.sendLinkEmail(prop.value).then(() => {
        prop.setOpen(true);
      });
    } else {
      setPanel(true);
      signIn();
    }
  };
  return (
    <>
      <div
        className={`h-[70%] w-full absolute left-0 right-0 flex-col justify-center items-center space-y-5 ${
          prop.state === 0 ? 'hidden' : 'flex'
        }`}
      >
        <h5 className='font-poppins font-[700] text-3xl'>
          Send Verification Message
        </h5>
        <div className='flex gap-4'>
          <Button
            height={30}
            width={140}
            onClick={() => prop.setState(prop.state - 1)}
            hover={false}
            on={clicked ? true : false}
            fontWeight={clicked ? 600 : 400}
          >
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
            <Button height={30} width={140} onClick={confirmHandler} on={clickedResend ? true : false} fontWeight={clickedResend ? 600 : 400}>
              Confirm
            </Button>
            <Button height={30} width={140} onClick={handleResend} on={clickedResend ? false : true} disabled={clickedResend ? true : false} fontWeight={clickedResend ? 400 : 600}>
              Resend
            </Button>
          </div>
        </div>
      </div>
      <div id='recaptcha-container' />
    </>
  );
};
const NumberEmail = () => {
  const [state, setState] = useState<number>(0);
  const [countryVal, setCountryVal] = useState<string>('91');
  const [value, setValue] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
    <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('signed')) {
            window.location.href = "/"
          }
        `,
          }}
        />
      </Head>
      <FormOne
        state={state}
        setState={setState}
        countryVal={countryVal}
        setCountryVal={setCountryVal}
        value={value}
        setValue={setValue}
        isEmail={isEmail}
        setIsEmail={setIsEmail}
      />
      <FormTwo
        state={state}
        setState={setState}
        countryCode={countryVal}
        value={value}
        isEmail={isEmail}
        setIsEmail={setIsEmail}
        setOpen={setOpen}
      />
      <ToastFunction open={open} onOpenChange={setOpen} duration={5000} title={isEmail ? 'Email Sent' : 'OTP Sent'} description={isEmail
              ? `Sent Email To ${value}`
              : `Sent OTP To ${countryVal} ${value}`}/>
    </>
  );
};

export default NumberEmail;
