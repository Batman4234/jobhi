import React from 'react';
import { useState } from 'react';
import { styled, keyframes } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import Autocomplete from './Autocomplete';
import {
  RowSpacingIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 40,
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

// Your app...

const Flex = styled('div', { display: 'flex' });
const IconButton = styled('button', {
  display: 'inline',
  alignItems: 'center',
  justifyContent: 'center',
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
export const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{alignItems: 'center'}}>
        <CollapsibleContent>
          <Autocomplete />
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <IconButton>
            {open ? (
              <Cross2Icon height={24} width={24} style={{zIndex: 20}} />
            ) : (
              <MagnifyingGlassIcon height={24} width={24} />
            )}
          </IconButton>
        </CollapsibleTrigger>
      </Flex>
    </Collapsible>
  );
};

export default CollapsibleDemo;
