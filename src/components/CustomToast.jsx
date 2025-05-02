import React from 'react'

const CustomToast = ({ message = "", message2 = "" }) => {
  return (
    <div className='bg-toast'>
      <h3 className='toast-title text-sm pb-2'> System </h3>
      <p className='toast-message'> {message} </p>
      <p className='toast-message'> {message2} </p>
    </div>
  )
}

export default CustomToast
