import React from 'react'
import Headline from './Headline'
import Newcontent from './Newcontent'

const Today = () => {
  return (
    <div id='home' className='max-w-[1640px]  mx-auto p-4 py-12'>
        <Headline title='TRENDING'/>
        <Newcontent/>
    </div>
  )
}

export default Today