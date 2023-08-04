import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2 border-white'>
        <div className='mt-5 mb-4 flex flex-col justify-center items-center '>
            <h2>PUSH LAYOUTS</h2>
            <Link href='/'><p >HOME</p></Link>
            <Link href='/#all'><p>PUSH</p></Link>
            <p>© 2023  Design by DC | All Rights Reserved.</p>

        </div>
    </div>
  )
}

export default Footer