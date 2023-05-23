import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
      <div>
          <div className='hidden md:block'>
            <div className='bg-black flex justify-between mt-40 w-full md:px-32 pt-6 pb-3 '>
                <div className=''>
                    <Image
                        src="/logo.svg" 
                        alt="Logo"
                        width={120}
                        height={50} className='mb-4' />
                        <div className='font-Alata text-[15px] text-white'>
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
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-end gap-3'>
                        <div className='group'>
                            <Image
                                    src="/icon-facebook.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-twitter.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-pinterest.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-instagram.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#696969] text-[15px]'>&copy; 2021 Loopstudios. All rights reserved.</p>
                    </div>
                    
                </div>
            
            </div>
          </div>

          {/* mobile view */}
            <div className='md:hidden block'>
                <div className='bg-black flex flex-col items-center mt-40 w-full pt-6 pb-3'>
                <div className=''>
                    <Image
                        src="/logo.svg" 
                        alt="Logo"
                        width={120}
                        height={50} className='mb-4' />
                  </div>
                  <div className='font-Alata text-[15px] text-white'>
                            <ul className='flex flex-col items-center gap-4'>
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
                <div className='flex flex-col items-center mt-10'>
                    <div className='flex  gap-3'>
                        <div className='group'>
                            <Image
                                    src="/icon-facebook.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-twitter.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-pinterest.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                        <div className='group'>
                            <Image
                                    src="/icon-instagram.svg" 
                                    alt="fb"
                                    width={20}
                                height={20} className='mb-2' />
                            <div className='border-b-2 bg-white opacity-0 group-hover:opacity-100'></div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#696969] font-Alata mt-2 pb-10'>&copy; 2021 Loopstudios. All rights reserved.</p>
                    </div>
                    
                </div>
            
                </div>
            </div>
            
    </div>
  )
}

export default Footer