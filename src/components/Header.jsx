import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const header = () => {

    const [nav, setNav] = useState(false);
    const [bgColor, setbgColor] = useState('transparent')

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeBgColor = () => {
            if (window.scrollY >= 90) {
                setbgColor('#000000')
            } else {
                setbgColor('transparent')
            }
        }
        window.addEventListener('scroll', changeBgColor)
    }, []);

    return (
        <>
            <div className='flex justify-center max-w-[1440px] relative'>
                <div style={{backgroundColor: `${bgColor}`}} className=' flex justify-between align-middle items-center w-full h-16 md:px-32 px-6 fixed left-0 top-0'>
                    <div className='md:z-0 z-10'>
                        <Image
                            src="/logo.svg" 
                            alt="Logo"
                            width={150}
                            height={100}/>
                    </div>
                    <div className='font-Alata  text-white'>
                        <ul className='hidden md:flex gap-8'>
                            <li className='group'>
                                <Link href='#'>About</Link> 
                                <div className='border-b-2 bg-white mx-2 opacity-0 group-hover:opacity-100'></div>
                            </li>
                            <li className='group'>
                                <Link href='#'>Careers</Link> 
                                <div className='border-b-2 bg-white mx-2 opacity-0 group-hover:opacity-100'></div>
                            </li>
                            <li className='group'>
                                <Link href='#'>Products</Link>
                                <div className='border-b-2 bg-white mx-2 opacity-0 group-hover:opacity-100'></div>
                            </li>
                            <li className='group'>
                                <Link href='#'>Support</Link>
                                <div className='border-b-2 bg-white mx-2 opacity-0 group-hover:opacity-100'></div>
                            </li>
                        </ul>
                    </div>

{/* Mobile Nav */}

                    <div onClick={handleNav} className='block md:hidden z-10'>
                        {nav ? <Image
                            src="/icon-close.svg"
                            alt='hamburger'
                            width={20}
                            height={20}/> : 
                        <Image
                            src="/icon-hamburger.svg"
                            alt='hamburger'
                            width={20}
                            height={20}/>}
                        
                    </div>
                    <div className={nav ? 'text-white bg-black absolute top-0 left-0 pl-6 md:hidden pt-[25vh] h-screen w-full ease-in-out duration-150' :
                                    'text-white bg-black absolute top-0 left-[-100%] pl-6 md:hidden pt-[25vh] h-screen w-full ease-in-out duration-150'} >
                        <ul className=''>
                            <li className='uppercase text-3xl mb-5'>
                                <Link href='#'>About</Link> 
                                
                            </li>
                            <li className='uppercase text-3xl mb-5'>
                                <Link href='#'>Careers</Link> 
                                
                            </li>
                            <li className='uppercase text-3xl mb-5'>
                                <Link href='#'>Products</Link>
                                
                            </li>
                            <li className='uppercase text-3xl mb-5'>
                                <Link href='#'>Support</Link>
                                
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default header