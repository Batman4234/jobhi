import React from 'react';
import Card from '../../components/card/Card'
import { useState, useCallback } from 'react';
import { styled, keyframes } from '@stitches/react';
import { olive, gray } from '@radix-ui/colors';
import { Cross2Icon, MagnifyingGlassIcon, DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { SearchIcon } from '@heroicons/react/outline';
import debounce from 'lodash/debounce';
const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 40,
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
// Your app...
const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: gray.gray11,
  '&[data-orientation=horizontal]': { height: 1, marginLeft: '100px', width: '86%', marginTop: '30px' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
export const Separator = StyledSeparator;
const OthersH1 = styled('h1', {
  fontFamily: 'Montserrat',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1px',
  fontSize: '13px',
  marginLeft: '100px',
  marginTop: '30px'
})
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
    color: gray.gray11
  }
})
const CategoryDiv = styled('div', {
  display: "flex"
})
const SearchPage = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: olive.olive1,
  zIndex: 40,
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
});
const InputDiv = styled('div', {
  paddingTop: '5px',
  positin: 'relative',
  display: 'flex',
  backgroundColor: '#fcfdfc',
  alignItems: 'center',
  border: '1px solid #171717',
  width: '515px',
  marginLeft: '393px',
  paddingLeft: '8px',
  marginTop: '39.3px',
  paddingBottom: '5px',
});
const IButton = styled('button', {
  paddingleft: '8px',
});
const InputText = styled('input', {
  height: '8px',
  padding: '12px',
  outline: 'none',
  fontSize: '12px',
  fontFamily: 'Montserrat',
  width: '515px',
});
const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});
const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 50ms ease-out forwards` },
  '&[data-state="closed"]': { animation: `${close} 50ms ease-out forwards` },
});
const RecentH1 = styled('h1', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  marginLeft: '100px',
  marginTop: '40px'
})
export const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const IOButton = styled('button', {
    marginRight: '8px'
})

const onChangeInput = (e: any) => {
  const valuee = e.target?.value;
  setValue(valuee);
  handleSearch(valuee)
}
const onClickDelete = ()=> {
  setValue('')
} 
const handleSearch = useCallback(
  debounce((value) => {
    console.log(value);
setDebounceValue(value)
  }, 1000),
  []
);
  return (
  
        <SearchPage>
          <div>
            <InputDiv>
              <IButton>
                <MagnifyingGlassIcon />
              </IButton>
              <InputText value={value} placeholder='Search Items' onChange={onChangeInput}/>
              <IOButton onClick={onClickDelete}>
                <DoubleArrowLeftIcon />
              </IOButton>
            </InputDiv>
            <Separator css={{ margin: '15px 0' }} />
            <CategoryDiv>
              <div>
                <OthersH1>Popular Categories</OthersH1>
                <OthersButton>Dress</OthersButton>
                <OthersButton>Shirt</OthersButton>
                <OthersButton>T-Shirt</OthersButton>
                <OthersButton>Shoes</OthersButton>
              </div>
              <div>
                <OthersH1>Popular Designers</OthersH1>
                <OthersButton>Designer 1</OthersButton>
                <OthersButton>Designer 2</OthersButton>
                <OthersButton>Designer 3</OthersButton>
                <OthersButton>Designer 4</OthersButton>
                <OthersButton>Designer 5</OthersButton>
                 </div>
              <div>
                <OthersH1>Popular Searches</OthersH1>
                <OthersButton>Johni</OthersButton>
                <OthersButton>Jooni</OthersButton>
                <OthersButton>Jobhi</OthersButton>
                 </div>
            </CategoryDiv>
            <Separator css={{ margin: '15px 0' }} />
            <div>
              <div>
                <RecentH1>Recently Viewed Products</RecentH1>
              </div>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </SearchPage>
  );
};

export default CollapsibleDemo;
