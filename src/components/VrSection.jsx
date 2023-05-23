import React from 'react'
import Image from 'next/image'
import vrImg from '../../public/image-interactive.jpg'

const VrSection = ({title, description}) => {
    return (
      <div>
        <div className='mt-40 md:px-32 px-6 md:relative'>
          <Image src={vrImg} alt='vr' className='' />
          <div className='md:absolute md:-bottom-14 md:left-[42rem] md:right-[10rem]'>
            <div className='bg-white md:p-20 md:pr-2 md:w-10/12 md:text-left p-14 text-center'>
                <h1 className='uppercase text-4xl'>{title}</h1>
                <p className='mt-3 font-Alata text-[15px] '>{description}</p>
            </div>
          </div>
          
        </div>
      </div>
      
  )
}

export default VrSection