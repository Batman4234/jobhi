import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import Card from '../../components/card/Card'
import { styled } from '@stitches/react';
import {
  MagnifyingGlassIcon,
  DoubleArrowLeftIcon,
} from '@radix-ui/react-icons';
import { gray } from '@radix-ui/colors';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import CardRow from 'components/card/CardRow';
const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: gray.gray11,
  '&[data-orientation=horizontal]': {
    height: 1,
    marginLeft: '100px',
    width: '86%',
    marginTop: '30px',
  },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
export const Separator = StyledSeparator;
const InputDiv = styled('div', {
  paddingTop: '5px',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #171717',
  marginLeft: '392px',
  paddingLeft: '8px',
  marginTop: '39.3px',
  paddingBottom: '5px',
  width: '515px',
  '@media only screen and (max-width: 600px)': {
    width: '1005px',
    marginLeft: '170px',
    padding: '25px',
  },
});
const InputText = styled('input', {
  height: '8px',
  width: '515px',
  padding: '30px',
  outline: 'none',
  fontSize: '12px',
  fontFamily: 'Montserrat',
  '@media only screen and (max-width: 600px)': {
    width: '805px',
    fontSize: '45px',
    paddingLeft: 50,
  },
});
const IButton = styled('button', {
  paddingleft: '8px',
  '@media only screen and (max-width:600px)': {
    paddingLeft: 15,
  },
});
const IOButton = styled('button', {
  '@media only screen and (max-width: 600px)': {
    width: 80,
    height: 80,
  },
});
const OthersH1 = styled('h1', {
  fontFamily: 'Montserrat',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1px',
  fontSize: '13px',
  marginLeft: '100px',
  marginTop: '30px',
  '@media only screen and (max-width:600px)': {
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 700,
    letterSpacing: 1.5,
  },
});
const OthersButton = styled('button', {
  display: 'flex',
  fontFamily: 'Montserrat',
  fontWeight: 700,
  textTransform: 'capitalize',
  letterSpacing: '0.1px',
  fontSize: '11.4px',
  marginLeft: '100px',
  marginTop: '10px',
  '&:hover': {
    transition: 'color 200ms ease-in-out',
    color: gray.gray11,
  },
  '@media only screen and (max-width:600px)': {
    fontSize: 50,
    fontWeight: 400,
    letterSpacing: 0.5,
  },
});
const CategoryDiv = styled('div', {
  display: 'flex',
  '@media only screen and (max-width:600px)': {
    marginTop: 100,
    marginRight: 25,
    marginBottom: 100
  },
});
const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const onChangeInput = (e: any) => {
    const valuee = e.target?.value;
    setValue(valuee);
    handleSearch(valuee);
  };
  const onClickDelete = () => {
    setValue('');
  };
  const handleSearch = useCallback(
    debounce((value) => {
      setDebounceValue(value);
    }, 1000),
    []
  );
  const RecentH1 = styled('h1', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  marginLeft: '100px',
  marginTop: '40px',
});
  return (
    <div>
      <div className='flex flex-col mt-64'>
        <div className='mb-24'>
          <div className='bg-white'>
            <InputDiv>
              <IButton>
                <MagnifyingGlassIcon className='h-[4rem] w-[4rem]' />
              </IButton>
              <InputText
                value={value}
                placeholder='Search Items'
                onChange={onChangeInput}
              />
              <IOButton onClick={onClickDelete}>
                <DoubleArrowLeftIcon className='h-[3rem] w-[3rem]' />
              </IOButton>
            </InputDiv>
          </div>
        </div>
        <Separator css={{ margin: '15px 0' }} />
        <CategoryDiv>
          <div>
            <OthersH1>Popular Categories</OthersH1>
            <OthersButton>Dress</OthersButton>
            <OthersButton>Shirt</OthersButton>
            <OthersButton>T-Shirt</OthersButton>
          </div>
          <div>
            <OthersH1>Popular Designers</OthersH1>
            <OthersButton>Designer 1</OthersButton>
            <OthersButton>Designer 2</OthersButton>
            <OthersButton>Designer 3</OthersButton>
          </div>
          <div>
            <OthersH1>Popular Searches</OthersH1>
            <OthersButton>Johni</OthersButton>
            <OthersButton>Jooni</OthersButton>
            <OthersButton>Jobhi</OthersButton>
          </div>
        </CategoryDiv>
        <Separator css={{ margin: '15px 0 0 0' }} />
          <CardRow name='recently viewed' className='mb-0'/>
          </div>
          </div>
  );
};

export default Home;
