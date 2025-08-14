import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
            <motion.div className='h-full w-full pl-4 pr-4 pt-6 sm:pl-10 sm:pr-10 sm:pt-12 bg-white rounded-md'>
            <motion.div
                className='text-3xl sm:text-6xl transition-transform duration-1000 ease-in-out hover:scale-102 text-center sm:text-left'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p>Reliable Financial </p>
                <p>Solutions for</p>
                <p>Business</p>
            </motion.div>
            <motion.div
                className='text-base sm:text-xl mt-4 sm:mt-8 text-center sm:text-left'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <p className='text-color3'>Avalon provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field , and the best among others.</p>
            </motion.div>
            <motion.div
                className='flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-8 sm:mt-15 gap-3 sm:gap-0 w-full max-w-full px-0 sm:px-0'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                <Button variant="default" className="h-12 w-full max-w-full sm:w-50 rounded-full text-white"> Get started now
                    <MoveRight />
                </Button>
                <Button variant="outline" className="h-12 w-full max-w-full sm:w-50 rounded-full bg-color2 text-gray-800 sm:ml-4 mt-3 sm:mt-0"> Learn More </Button>
            </motion.div>
            <motion.div
                className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-10 sm:mt-20'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
                <div className='text-center sm:text-left'>
                    <p className='text-2xl sm:text-4xl'>20+</p>
                    <p className='text-base sm:text-xl text-color3'>Multinational businesses </p>
                    <p className='text-base sm:text-xl text-color3'>have used Avalon</p>
                </div>
                <div className='text-center sm:text-left'>
                    <p className='text-2xl sm:text-4xl'>4K+</p>
                    <p className='text-base sm:text-xl text-color3'>Daily transactions </p>
                    <p className='text-base sm:text-xl text-color3'>from around the world</p>
                </div>
            </motion.div>
    </motion.div>
    )
}

export default FirstHero