import { useState } from 'react'
import Header from './header/Header.jsx'
import FirstHero from './main/FirstHero.jsx'
import SecondHero from './main/SecondHero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Main root div fills viewport - prevents scroll
    <div className="min-h-screen w-screen overflow-hidden">
      {/* Grid container also fills viewport */}
      <div className="grid grid-rows-[50px_1fr] gap-1.5 bg-color2 w-full min-h-screen">
        <header className="text-center col-span-1 bg-white p-1 text-2xl font-bold text-gray-800 shadow-md">
          <Header />
        </header>
        {/* Main flex area does not add extra margin/padding that could overflow */}
        <main className="flex flex-col gap-3 sm:justify-around sm:flex-row h-full">
          <div className="flex-1 h-full">
            <FirstHero />
          </div>
          <div className="rounded-md flex-1 h-full">
            <SecondHero />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App