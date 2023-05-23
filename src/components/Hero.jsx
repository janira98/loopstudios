import React from 'react'
import Image from 'next/image'


const Hero = ({ heading1, heading2, heading3 }) => {
    return (
        <div className='flex justify-start h-[650px] bg-no-repeat bg-cover bg-center'
                style={{
                  backgroundImage:'url(/image-hero.jpg)'
                }}
      >
        <div className='mt-48 md:px-32 px-6 text-white'>
          <div className='md:p-12 md:pr-24 p-8 border-4 border-white w-fit'>
            <h1 className='text-6xl uppercase '>{heading1}</h1>
            <h1 className='text-6xl uppercase '>{heading2}</h1>
            <h1 className='text-6xl uppercase '>{heading3}</h1>
          </div>
        </div>
            
      </div>
    )
}

export default Hero