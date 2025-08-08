import React from 'react'
import Funmi from '@/assets/funmi.jpg'
import OrderCard from './OrderCard'
import AvgOrderCard from './AvgOrderCard'
import { PanelRightClose } from 'lucide-react'

function SecondHero() {
  return (
    <div className='relative h-full w-full  mx-auto border rounded-lg overflow-hidden shadow'>
      <img src={Funmi} alt="funmi" className='sm:h-[90vh] w-full object-cover' />
      <div className='absolute bottom-40 left-20 space-y-3'>
        <OrderCard
          orders={'24,500'}
          cent={'30'}
        />

        <AvgOrderCard
          amount={'20,000'}
          cent={'50'}
        />
      </div>
      <div className='absolute flex flex-row justify-center items-center gap-1 bottom-10 left-20 text-color2 text-2xl font-bold'>
        <div className='flex bg-color2 h-12 w-12  items-center justify-center rounded-full'><PanelRightClose fill='black' className='flex justify-self-center align-self-center' /></div>
        
        <p className='text-lg'>Your journey to financial freedom starts here.</p>
      </div>
      <div>
        <span className='border-b-8'></span> 
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default SecondHero