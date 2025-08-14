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
                <div className="flex ml-4 sm:ml-12 items-center justify-center" >
                    <img src={avalon} alt="logo" className="w-8 h-8 mr-2 rounded-full" />
                    <span className="text-2xl sm:text-3xl font-bold text-color4">Avalon</span>
                </div>
                {/* Desktop Navigation */}
                <nav className="hidden sm:flex space-x-6 text-xl" >
                    {/* ...existing code... */}
                    {Object.entries({ 'solutions': ['Sitem1','Sitem2','Sitem3'], 'industries': ['iItem1','iTem2'] }).map(([key, value], index) => (
                        <div key={index} className="relative flex justify-center items-center space-x-1" >
                            <a href="#" className="text-color4 hover:text-color3" onClick={(() => handleOpen(index+1))}>{key}</a>
                            <ChevronDown className={`transform transition-transform duration-700 ease-out ${openId===index+1 ? "rotate-180" : "rotate-0"}`} onClick={(() => handleOpen(index+1))} />
                            {openId === index+1 && (
                                <div className='h-30 w-40 card'>
                                    <div className='close-icon-wrapper'><X  onClick={() => handleOpen(0)} /></div>
                                    <ul>
                                        {value.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-color4 hover:text-color3">
                                                <a href="#">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className='flex items-center space-x-6'>
                        <a href="#" className="text-color4 hover:text-color3">Pricing</a>
                        <a href="#" className="text-color4 hover:text-color3">Resources</a>
                        <a href="#" className="text-color4 hover:text-color3">Company</a>
                    </div>
                </nav>
                {/* Mobile Hamburger & Menu */}
                <div className='flex sm:hidden items-center gap-2 mr-4'>
                    <Button variant="default" className="h-9 w-20 rounded-full text-white text-xs sm:text-sm px-2 sm:px-4">Get Started</Button>
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-color4 focus:outline-none"
                        onClick={() => setOpenId(openId === 99 ? 0 : 99)}
                        aria-label="Open menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {openId === 99 && (
                        <div className="absolute top-14 right-4 bg-white rounded-md shadow-lg z-50 p-4 w-48">
                            <button className="absolute top-2 right-2" onClick={() => setOpenId(0)}>
                                <X className="h-5 w-5 text-color4" />
                            </button>
                            <ul className="flex flex-col gap-3 mt-4">
                                <li><a href="#" className="text-color4 hover:text-color3">Solutions</a></li>
                                <li><a href="#" className="text-color4 hover:text-color3">Industries</a></li>
                                <li><a href="#" className="text-color4 hover:text-color3">Pricing</a></li>
                                <li><a href="#" className="text-color4 hover:text-color3">Resources</a></li>
                                <li><a href="#" className="text-color4 hover:text-color3">Company</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                {/* Desktop Button */}
                <div className='hidden sm:block mr-12'>
                    <Button variant="default" className="h-9 w-25 rounded-full text-white text-sm px-4"> Get Started  </Button>
                </div>
            </div>
        )
}

export default Header