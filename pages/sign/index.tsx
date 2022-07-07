import SignIndex from '@components/sign'
import Template from '@components/sign/template'
import React from 'react'
const index = () => {
  return (
    <div>
    {/* <SignIndex />   */}
    <Template question='Enter your email?' placeholder='shopatjobhi@gmail.com' type="email"/>  
    </div>
  )
}

export default index