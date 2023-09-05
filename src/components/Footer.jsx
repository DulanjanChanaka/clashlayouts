import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-white'>
        <div className='mt-5 mb-4 flex flex-col md:flex-row justify-center  items-center '>
            <h2 className='pr-2'>LEDGEND BASES </h2>
            
            <p> © 2023  Design by DC | All Rights Reserved. </p>
            <a  href='https://sites.google.com/view/legendbases/home'><p className='pr-2' > | Terms and conditions</p></a>
            <a href='https://sites.google.com/view/legendbase/home'><p className='pr-2'> | Privacy policy</p></a>

        </div>
    </div>
  )
}

export default Footer