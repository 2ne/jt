import React, { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <div className="min-h-[500vh] bg-zinc-950 text-zinc-50">
      <div className="grayscale brightness-[25%] overflow-hidden bg-[url('./assets/2.png')] bg-fixed bg-no-repeat absolute inset-0 bg-cover" />
      <header className="sticky top-0 w-full p-6 mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold line">James Toone</h1>
        </div>
      </header>
      <section className="position relative grid place-content-center w-full min-h-[calc(100vh-9rem)] p-6 mx-auto text-center">
        <div className="space-y-8">
          <h2 className="font-bold text-6xl line-lg drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
            Lead Product Designer
          </h2>
          <p className="text-xl font-semibold text-zinc-500 text-balance w-full mx-auto max-w-[48ch] drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
            Creating visually stunning & intuitive designs that provide
            exceptional user experiences.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
