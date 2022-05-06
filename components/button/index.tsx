import React, {FC} from 'react'
export interface Props {
    width?: number
}
const index:FC<Props> = ({width}) => {
  return (
    <div className='w-full justify-center flex'>
    <button
      type='submit'
      className={`py-3 mt-6 tracking-widest text-midnight bg-sky uppercase border border-midnight shadow-lg rounded-sm text-lg ${width ? width : 'w-64'}`}
    >
      Start
    </button></div>
  )
}

export default index