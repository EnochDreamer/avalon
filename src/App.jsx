import { useState } from 'react'
import Header from './header/Header.jsx'
import FirstHero from './main/FirstHero.jsx'
import SecondHero from './main/SecondHero.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="sm:h-screen w-screen">
      <div className="grid grid-rows-[50px_1fr] gap-1.5 bg-color2 w-full h-fit sm:h-screen">
        <header className=" text-center col-span-1 bg-white p-1 text-2xl font-bold text-gray-800 shadow-md">
          <Header />
        </header>

        <main className="flex flex-col gap-3 sm:justify-around m-3 sm:flex-row">
          <div className=" min-h-100  flex-1 sm:h-full">
            <FirstHero />
          </div>
          <div className="rounded-md flex-1  min-h-100 sm:h-full">
            <SecondHero />
          </div>
        </main>
      </div>
    </div>


  )
}

export default App
