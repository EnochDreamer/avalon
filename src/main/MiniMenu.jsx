import React, { useState } from 'react'
import {EllipsisVertical, X } from 'lucide-react'



function MiniMenu({ text1, text2, cent }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleOpen() {
        setIsOpen((isOpen) => {
            return !isOpen
        })
    }
    return (
        <div className='relative transition-transform duration-300 ease-in-out hover:scale-102'>
            <div className=' rounded-sm p-3 h-25 w-80  grid grid-flow-col bg-white grid-cols-[3fr_1fr] grid-rows-2'>
                <div className='font-bold text-color3'>{text1}</div>
                <div className='font-bold text-2xl'>{text2}</div>
                <div className='font-bold flex justify-end'><EllipsisVertical onClick={handleOpen} /></div>
                <div className='font-bold flex justify-end'>{`+${cent} %`}</div>
            </div>
            {
                isOpen && (
                    <div className='h-30 w-40 card'>
                <div className='close-icon-wrapper' ><X onClick={handleOpen} /></div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
                )   
            }
        </div>

    )
}

export default MiniMenu