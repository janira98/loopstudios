import React from 'react'
import Image from 'next/image'
import IMG1 from '../../public/image-deep-earth.jpg'
import IMG2 from '../../public/image-night-arcade.jpg'
import IMG3 from '../../public/image-soccer-team.jpg'
import IMG4 from '../../public/image-grid.jpg'
import IMG5 from '../../public/image-from-above.jpg'
import IMG6 from '../../public/image-pocket-borealis.jpg'
import IMG7 from '../../public/image-curiosity.jpg'
import IMG8 from '../../public/image-fisheye.jpg'
import IMGm1 from '../../public/mobileImg/image-deep-earth.jpg'
import IMGm2 from '../../public/mobileImg/image-night-arcade.jpg'
import IMGm3 from '../../public/mobileImg/image-soccer-team.jpg'
import IMGm4 from '../../public/mobileImg/image-grid.jpg'
import IMGm5 from '../../public/mobileImg/image-from-above.jpg'
import IMGm6 from '../../public/mobileImg/image-pocket-borealis.jpg'
import IMGm7 from '../../public/mobileImg/image-curiosity.jpg'
import IMGm8 from '../../public/mobileImg/image-fisheye.jpg'


const CreationSection = () => {
  return (
      <div className='md:px-32 px-6'>
          <div className='mt-40 mb-20 flex justify-between'>
            <h1 className='uppercase text-4xl'>Our Creations</h1>
            <button className='font-Alata text-[15px] uppercase border-2 py-1 px-12 border-black hover:bg-black hover:text-white tracking-widest'>See all</button>
          </div>
          <div className='md:block hidden'>
            <div className='flex justify-between'>
                <div className='group relative' >
                    <Image src={IMG1} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Deep</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Earth</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG2} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Night</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Archade</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG3} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Soccer</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Team VR</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG4} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Third</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Grid</h3>
                    </div>
                </div>
                
                
            </div>
            <div className='flex justify-between mt-10'>
                <div className='group relative' >
                    <Image src={IMG5} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Deep</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Earth</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG6} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Night</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Archade</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG7} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Soccer</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Team VR</h3>
                    </div>
                </div>
                <div className='group relative' >
                    <Image src={IMG8} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Third</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Grid</h3>
                    </div>
                </div>
                
                
            </div>
          </div>
          <div className='block md:hidden'>
            
                <div className='group relative mb-8' >
                    <Image src={IMGm1} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Deep</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Earth</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm2} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Night</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Archade</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm3} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Soccer</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Team VR</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm4} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Third</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Grid</h3>
                    </div>
                </div>
                
                <div className='group relative mb-8' >
                    <Image src={IMGm5} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Deep</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Earth</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm6} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Night</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Archade</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm7} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Soccer</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Team VR</h3>
                    </div>
                </div>
                <div className='group relative mb-8' >
                    <Image src={IMGm8} className='group-hover:opacity-30' />
                    <div className='absolute bottom-0 text-2xl pb-4 pl-8 bg-gradient-to-t from-black/50 ... w-full'>
                        <h3 className='text-white uppercase group-hover:text-black'>Third</h3>
                        <h3 className='text-white uppercase group-hover:text-black'>Grid</h3>
                    </div>
              </div>
              <div className='flex justify-center'>
                <button className='font-Alata text-[15px] uppercase border-2 py-1 px-12 border-black hover:bg-black hover:text-white tracking-widest'>See all</button>
              </div>
          </div>
          
      </div>
  )
}

export default CreationSection