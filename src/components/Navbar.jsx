"use client" 

import Image from 'next/image'
import Link from 'next/link'
import React  from 'react'
import {useState, useEffect} from 'react'
import {AiOutlineClose,  AiOutlineMenu} from 'react-icons/ai'
// import { useRouter } from 'next/router'



const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const [activeItem, setActiveItem] = useState(null);
    // const router = useRouter()
    const handleItemClick = (item) => {
        setActiveItem(item);
      };

    useEffect(()=>{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        
},[])



    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);


  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow? 'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between  items-center w-full h-full px-2 2xl:px-16'>
            <h2 className='font-bold  text-black'>PUSH LAYOUTS</h2>
           
           <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                <Link href='/' >
                <li
        className={`ml-10 text-sm uppercase hover:border-b-2 hover:text-[#5651e5] ${activeItem === 'item1' ? 'border-black' : ''}`}
        style={{ borderBottomWidth: activeItem === 'item1' ? '1px' : '0px' }}
        onClick={() => handleItemClick('item1')}
      >Home</li>
                </Link>
                <Link href='/#all'>
                <li
        className={`ml-10 text-sm uppercase hover:border-b-2 hover:text-[#5651e5] ${activeItem === 'item2' ? 'border-black' : ''}`}
        style={{ borderBottomWidth: activeItem === 'item2' ? '1px' : '0px' }}
        onClick={() => handleItemClick('item2')}
      >Push</li>
                </Link>
                
               
            </ul>
            <div onClick={handleNav} className='md:hidden text-black'>
              <AiOutlineMenu size={25} />
            </div>
           </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <h2 className='font-semibold  text-black'>PUSH LAYOUTS</h2>
                        <div onClick={handleNav}className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className ='border-b border-t-gray-300 my-4'>
                        <p className ='w-[85%] md:w-[90%] text-black  py-4'>Play Like Legend</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase text-black'>
                        <Link href='/'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/#all'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>push</li>
                        </Link>

                    </ul>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar