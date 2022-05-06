import React, {FC, PropsWithChildren} from 'react'
import {styled} from '@stitches/react'
const RecentH1 = styled('h1', {
  fontFamily: 'Poppins',
  textTransform: 'uppercase',
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  marginLeft: '100px',
  marginTop: '4%',
  '@media screen and (max-width: 600px)': {
    fontSize:80,
  }
})
export interface Props {

}
const Headline:FC<PropsWithChildren<Props>> = ({children}) => {
  return (
      <RecentH1>{children}</RecentH1>
  )
}

export default Headline