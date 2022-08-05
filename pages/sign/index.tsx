import React, { useState } from 'react';
import SignIndex from '@components/sign';
import Template from '@components/sign/template';
import End from '@components/sign/end';
import NumberEmail from '@components/sign/NumberEmail';
import { useRouter } from 'next/router';
import { useAuth } from '@lib/Auth';
import Head from 'next/head';
const Sign = () => {
  // React
  const [state, setState] = useState<number>(0);
  interface Credential {
    name: string;
    number: string;
    address: string;
  }
  const [credential, setCredential] = useState<Credential>({
    name: '',
    number: '',
    address: '',
  } as Credential);
  const [countryCode, setCountryCode] = useState<string>('91');
  const [isEmail, setIsEmail] = useState<boolean>(false);
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
      <SignIndex
        containerClassName={`${state === 0 ? 'block' : 'hidden'}`}
        onClick={() => setState(state + 1)}
      />
      <Template
        question={"What's your name?"}
        type={'text'}
        placeholder={'Enter your name here'}
        href={(e) => {
          e.preventDefault();
          const name = credential.name !== undefined ? credential.name : '';
          if (credential.name !== undefined && name.trim() !== '') {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
        containerClassName={`${state === 1 ? 'block' : 'hidden'}`}
        value={credential.name}
        onChange={(e) => {
          e.preventDefault();
          setCredential({
            name: (e.target as HTMLInputElement).value,
            number: credential.number,
            address: credential.address,
          });
        }}
      />
      <NumberEmail
        isEmail={isEmail}
        setIsEmail={setIsEmail}
        next={(e: React.MouseEvent) => {
          e.preventDefault();
          var reg = RegExp(/^-?\d*\.?\d*$/);
          if (isEmail) {
            if (
              credential.number.trim().includes('@') &&
              credential.number.trim().length > 5
            ) {
              setState(state + 1);
            }
          } else {
            if (reg.test(credential.number)) {
              setState(state + 1);
            }
          }
        }}
        previous={() => setState(state - 1)}
        containerClassName={`${state === 2 ? 'block' : 'hidden'}`}
        value={credential.number}
        countryVal={countryCode}
        countryOnChange={(e) => {
          var reg = RegExp(/^-?\d*\.?\d*$/);
          const untitled = (e.target as HTMLInputElement).value;
          if (reg.test(untitled)) {
            setCountryCode((e.target as HTMLInputElement).value);
          }
        }}
        onChange={(e) => {
          setCredential({
            number: (e.target as HTMLInputElement).value,
            name: credential.name,
            address: credential.address,
          });
        }}
        onNumberChange={(e) => {
          const reg = RegExp(/^-?\d*\.?\d*$/);
          const untitled = (e.target as HTMLInputElement).value;
          if (reg.test(untitled)) {
            setCredential({
              number: (e.target as HTMLInputElement).value,
              name: credential.name,
              address: credential.address,
            });
          }
        }}
      />
      <Template
        question={'Where are you living on / Address for orders'}
        placeholder={'Enter your address for order deliveries here'}
        href={(e) => {
          e.preventDefault();
          const address =
            credential.address !== undefined ? credential.address : '';
          if (credential.address !== undefined && address.trim() !== '') {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
        containerClassName={`${state === 3 ? 'block' : 'hidden'}`}
        value={credential.address}
        onChange={(e) => {
          e.preventDefault();
          setCredential({
            name: credential.name,
            number: credential.number,
            address: (e.target as HTMLInputElement).value,
          });
        }}
      />
      <End
        previous={() => setState(state - 1)}
        containerClassName={`${state === 4 ? 'block' : 'hidden'}`}
        credentials={{
          name: credential.name,
          number: credential.number,
          address: credential.address,
          isEmail,
          countryCode,
        }}
      />
    </>
  );
};

export default Sign;
