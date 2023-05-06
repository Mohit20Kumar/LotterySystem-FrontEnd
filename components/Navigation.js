import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navigation = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] =useState('transparent')
    const [textColor, setTextColor] =useState('white')

    const handleNav=()=>{
        setNav(!nav);
    };

    useEffect(()=>{
        const changeColor=()=>{
            if(window.scrollY>=90 ){
                setColor('#000000')
                setTextColor('#ffffff')
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        };
        window.addEventListener('scroll',changeColor)
    }, []);


  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-5 text-white '>
            <Link href='/'>
                <h1 style={{color:`${textColor}`}} className='font-bold text-4xl text-blue-400'>CRYPTOLOTTO</h1>
            </Link>
            <ul style={{color:`${textColor}`}}  className='hidden sm:flex '>
                <li onClick={handleNav} className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li onClick={handleNav} className='p-4'>
                    <Link href='/aboutUs'>About Us</Link>
                </li>
                <li onClick={handleNav} className='p-4'>
                    <Link href='/support'>Support Us</Link>
                </li>
                <li onClick={handleNav} className='p-4'>
                    <Link href='/contact'>Contact Us</Link>
                </li>
            </ul>
        {/* Mobile button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {
                    nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}} />  : <AiOutlineMenu size={20} style={{color:`${textColor}`}}  />
                }
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cyan-500 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-cyan-500 text-center ease-in duration-300'}>
                <ul>
                <li className='p-4 text-4xl hover:text-black'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-black'>
                    <Link href='/aboutUs'>About Us</Link>
                </li>
                <li className='p-4 text-4xl hover:text-black'>
                    <Link href='/support'>Support Us</Link>
                </li>
                <li className='p-4 text-4xl hover:text-black'>
                    <Link href='/contact'>Contact Us</Link>
                </li>
            </ul> 

            </div>
            
        </div>
    </div>
  )
}

export default Navigation