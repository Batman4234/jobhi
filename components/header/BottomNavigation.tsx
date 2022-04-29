import React from 'react'
import { HomeIcon } from '@radix-ui/react-icons'
import {styled} from '@stitches/react'
const BigDiv = styled('div', {
display: 'flex',
boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})
const SmallerDiv = styled('div', {
display: 'flex',
})
const HomeDiv = styled('div', {
display: 'flex',
})
const IconH4 = styled('h4', {

})
const BottomNavigation = () => {
    return (
        <>
        <BigDiv>
            <SmallerDiv>
                <HomeDiv>
                    <HomeIcon height={100} width={100} color="Blue"/>
                        <IconH4>Home</IconH4>
                </HomeDiv>
            </SmallerDiv>
        </BigDiv>
</>
  )
}

export default BottomNavigation