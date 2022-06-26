import Button from '@components/button/Button'
import { gray } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import React from 'react'


const ProfileContainer = styled('div', {
  // Height And Width
  height: '100%',
  width: '100%',
  // Margin And Padding
  padding: 50,
  // Mobile View
  '@media screen and (max-width: 600px)': {
    // Margin And Padding
    '@media screen and (min-height: 700px) and (max-height: 800px)': {
      marginBottom: '5vh'
    },
    '@media screen and (min-height: 800px) and (max-height: 852px)': {
      marginBottom: '17vh'
    },
    '@media screen and (min-height: 852px) and (max-height: 900px)': {
      marginBottom: '21.5vh'
    },
    '@media screen and (min-height: 900px) and (max-height: 1000px)': {
      marginBottom: '29vh'
    },
  }
})
const Container = styled("div", {
  display: 'flex',
  flexDirection: 'column'
})
const Label = styled('label', {
  // Text Transformations
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  fontSize: 15,
  letterSpacing: '0.025em',
})
const Input = styled('input', {
  // Height And Width
  width: '100%',
  height: '2rem',
  // Border
  border: '1px solid #171717' ,
  // Margin And Padding
  padding: 8,
  // Text Transformations
  fontFamily: 'Poppins',
  color: '#171717',
  // Outline
  outline: 'none',
  // Transition
  transition: 'all 400ms cubic-bezier(.73,.08,.53,.81)',
})
const Profile = () => {
  return (
    <ProfileContainer className="space-y-10">
      <Container className="space-y-2">
        <Label htmlFor="name">name</Label>
        <Input
        type="text"
        name="name"
        id="name"
        placeholder="Ibrahim Shaz"
        />
      </Container>
      <Container className="space-y-2">
        <Label htmlFor="nickname">nickname</Label>
        <Input
        type="text"
        name="nickname"
        id="nickname"
        placeholder="Jo-Bee"
        />
      </Container>
      <Container css={{color: gray.gray10}}className="space-y-2">
        <Label htmlFor="email">email</Label>
        <Input
        type="email"
        disabled
        name="email"
        id="email"
        value="ibrahim.shaz670@gmail.com"
        />
      </Container>
      <Container className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
        type="text"
        name="address"
        id="address"
        placeholder="Kasaragod, Kerala, India"
        />
      </Container>
      <Container css={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
        <Button on={true} width={150} height={50} fontWeight={800} fontSize={20} rounded={6}>Save</Button>
      </Container>
    </ProfileContainer>
  )
}

export default Profile