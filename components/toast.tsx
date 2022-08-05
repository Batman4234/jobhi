import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { slate } from '@radix-ui/colors';
import * as ToastPrimitive from '@radix-ui/react-toast';
const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100%))` },
  to: {transform: 'translateX(var(--radix-toast-swipe-move-x))'},
});

const swipeOut = keyframes({
  from: {transform: 'translateX(var(--radix-toast-swipe-move-x))'},
  to: { transform: `translateX(calc(100%))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right : 0,
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
  backgroundColor: 'white',
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
  fontWeight: 500
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
export interface Props {
    duration: number;
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description: string;
}
const ToastFunction = (prop:Props) => {
  return (
    <ToastProvider swipeDirection="right">
    <Toast open={prop.open} onOpenChange={prop.onOpenChange} duration={prop.duration}>
      <ToastTitle>
        {prop.title}
      </ToastTitle>
      <ToastDescription>
        {prop.description}
      </ToastDescription>
    </Toast>
    <ToastViewport />
  </ToastProvider>
  )
}

export default ToastFunction