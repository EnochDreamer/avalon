import React from 'react'
import { motion } from 'framer-motion'
import Funmi from '@/assets/funmi.jpg'
import OrderCard from './OrderCard'
import AvgOrderCard from './AvgOrderCard'
import { PanelRightClose } from 'lucide-react'

function SecondHero() {
  return (
    <motion.div className='relative w-full mx-auto border rounded-lg overflow-hidden shadow h-full'>
      <motion.img 
        src={Funmi} 
        alt="funmi" 
        className='w-full h-auto object-contain sm:h-screen sm:object-cover' 
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div 
        className='absolute bottom-40 left-20 space-y-3'
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <OrderCard orders={'24,500'} cent={'30'} />
        <AvgOrderCard amount={'20,000'} cent={'50'} />
      </motion.div>
      <motion.div 
        className='absolute flex flex-row justify-center items-center gap-1 bottom-10 left-20 text-color2 text-2xl font-bold'
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className='flex bg-color2 h-12 w-12  items-center justify-center rounded-full'><PanelRightClose fill='black' className='flex justify-self-center align-self-center' /></div>
        <p className='text-lg'>Your journey to financial freedom starts here.</p>
      </motion.div>
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <span className='border-b-8'></span> 
        <span></span>
        <span></span>
      </motion.div>
    </motion.div>
  )
}

export default SecondHero