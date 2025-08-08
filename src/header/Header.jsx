import { React, useState } from 'react'
import avalon from '../assets/avalon.png'
import { Button } from "@/components/ui/button"
import { ChevronDown, X } from 'lucide-react'




function Header() {

    const [openId, setOpenId] = useState(0)
    function handleOpen(id) {
        setOpenId(() => {
            if (openId=== id) {
                return 0 // Close the dropdown if the same id is clicked

            }
            return id
        })

    }
    console.log(openId);
    return (
        <div className='flex flex-row justify-between items-center self-center bg-white'>
            <div className="flex ml-12 items-center justify-center" >
                <img src={avalon} alt="logo" className="w-8 h-8 mr-2 rounded-full" />
                <span className="text-3xl font-bold text-color4">Avalon</span>
            </div>
            <nav className="hidden sm:flex space-x-6 text-xl" >
                {
                    Object.entries({ 'solutions': ['Sitem1','Sitem2','Sitem3'], 'industries': ['iItem1','iTem2'] }).map(([key, value], index) => (
                        <div key={index} className="relative flex justify-center items-center space-x-1" >
                            <a href="#" className="text-color4 hover:text-color3" onClick={(() => handleOpen(index+1))}>{key}</a>
                            <ChevronDown className={`transform transition-transform duration-700 ease-out ${
openId===index+1 ? "rotate-180" : "rotate-0"}`} onClick={(() => handleOpen(index+1))} />
                            {
                                openId === index+1 && (
                                    <div className='h-30 w-40 card'>
                            <div className='close-icon-wrapper'><X  onClick={() => handleOpen(0)} /></div>
                                        <ul>
                                            {
                                                value.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="text-color4 hover:text-color3">
                                                        <a href="#">{item}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    ))
                }
                <div className='flex items-center space-x-6'>
                    <a href="#" className="text-color4 hover:text-color3">Pricing</a>
                    <a href="#" className="text-color4 hover:text-color3">Resources</a>
                    <a href="#" className="text-color4 hover:text-color3">Company</a>
                </div>
            </nav>
            <div className='mr-12'>
                <Button variant="default" className="h-9 w-25 rounded-full text-white text-sm"> Get Started  </Button>
            </div>

        </div>
    )
}

export default Header