import React from 'react';
import { styled } from '@stitches/react';
import { olive, mauve, gray } from '@radix-ui/colors';
import { CheckIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {ChevronDownIcon} from '@heroicons/react/solid'
import * as SelectPrimitive from '@radix-ui/react-select';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 10,
  fontWeight: '600',
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  '@media screen and (max-width:600px)': {
      height: 100,
      width: 120,
      marginTop: 16,
      fontSize: 30
  },
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: olive.olive1,
  borderRadius: '5px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    '@media screen and (max-width:600px)': {
      height: 350,
      width: 250,
      borderRadius: 16
  }
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 10,
  fontWeight: '600',
  lineHeight: 1,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },
  '&:focus': {
    transition: 'all 0.2s ease-in-out ',
    backgroundColor: gray.gray12,
    color: 'white',
  },
  '@media screen and (max-width:600px)': {
    height: 100,
    width: 180,
    fontSize: 50,
    borderRadius: 5,
},
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '10px 25px 0 25px',
  fontSize: 15,
  lineHeight: '25px',
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: 'Black',
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

// Your app...
const Box = styled('div', {
});

export const SelectDemo = () => (
  <Box>
    <Select defaultValue="INR">
      <SelectTrigger aria-label="Currency">
        <SelectValue />
        <SelectIcon>
          <ChevronDownIcon height={15} width={15} />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon height={15} width={15} />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Currency</SelectLabel>
            <SelectItem value="INR">
              <SelectItemText>INR</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="USD">
              <SelectItemText>USD</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="EUR">
              <SelectItemText>EUR</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon height={15} width={15} />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  </Box>
);

export default SelectDemo;
