import { React, useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react'
function FirstHero() {
    const [mounted, setMounted] = useState(false)
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setMounted(true);
        console.log("from effect:", mounted);
        setVisible(true);
    }, []);

    

    



console.log("from outside effect:", mounted);

return (
    <div className='h-full w-full pl-10 pt-12 bg-white rounded-md'>
        <div className='text-6xl transition-transform duration-1000 ease-in-out hover:scale-102'>
            <p>Reliable Financial </p>
            <p>Solutions for</p>
            <p>Business</p>
        </div>
        <div
            className={`transition-opacity duration-10000 ${visible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <h1 className="text-xl">Fade In with Tailwind</h1>
        </div>
        <div className='text-xl mt-8'>
            <p className='text-color3'>Avalon provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field , and the best among others.</p>
        </div>


        <div className='flex flex-row justify-start items-center mt-15'>
            <Button variant="default" className="h-12 w-50 rounded-full text-white"> Get started now
                <MoveRight />
            </Button>
            <Button variant="outline" className="h-12 w-50 rounded-full bg-color2 text-gray-800 ml-4"> Learn More </Button>
        </div>
        <div className='flex flex-row gap-6 items-center mt-20'>
            <div className=''>
                <p className='text-4xl'>20+</p>
                <p className='text-xl text-color3'>Multinational businesses </p>
                <p className='text-xl text-color3'>have used Avalon</p>
            </div>
            <div>
                <p className='text-4xl'>4K+</p>
                <p className='text-xl text-color3'>Daily transactions </p>
                <p className='text-xl text-color3'>from around the world</p>
            </div>
        </div>
    </div>
)
}

export default FirstHero