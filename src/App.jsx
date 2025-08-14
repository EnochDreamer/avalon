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
      <div className="bg-color2 w-full min-h-screen">
        <header className="fixed top-0 left-0 w-full z-50 text-center bg-white p-1 text-2xl font-bold text-gray-800 shadow-md">
          <Header />
        </header>
        <div className="pt-[50px] sm:h-[calc(100vh)]">
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
    </div>
  )
}

export default App