import React, { ReactElement, useEffect, useState } from 'react'

function App(): ReactElement {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPos)

    return () => {
      window.removeEventListener('mousemove', updateCursorPos)
    }
  }, [])

  return (
    <div className="min-h-[500vh] bg-zinc-950 text-zinc-50 ">
      <div className="absolute inset-0 bg-[url('./assets/2.png')] bg-center bg-no-repeat bg-cover"></div>
      <div
        className="absolute inset-0 bg-[url('./assets/2.png')] bg-center bg-no-repeat bg-cover filter grayscale brightness-[25%]"
        style={{
          WebkitMaskImage: `radial-gradient(circle 75px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, black 100%)`,
          maskImage: `radial-gradient(circle 75px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, black 100%)`
        }}
      ></div>
      <div className="bg-[url('./assets/noise.png')] fixed inset-0 z-50 pointer-events-none opacity-20"></div>
      <header className="sticky top-0 w-full p-6 mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
            James Toone
          </h1>
        </div>
      </header>
      <section className="position relative grid place-content-center w-full min-h-[calc(100vh-10rem)] p-6 mx-auto text-center">
        <div className="space-y-2">
          <h2 className="cursor-defualt line-through decoration-[3px] decoration-zinc-950 font-bold text-6xl leading-relaxed line-lg drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
            Lead Product Designer
          </h2>
          <p className="cursor-default text-xl font-semibold text-zinc-500 text-balance w-full mx-auto max-w-[48ch] drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
            Creating visually stunning & intuitive designs that provide
            exceptional user experiences.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
