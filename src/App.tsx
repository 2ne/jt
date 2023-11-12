import React, { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="overflow-hidden bg-[url('./assets/2.png')] bg-fixed bg-no-repeat bg-[center_top_-8rem] absolute inset-6 rounded-3xl" />
      <header className="w-full p-6 mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold line">James Toone</h1>
        </div>
      </header>
      <section className="grid place-content-center w-full min-h-[75vh] p-6 mx-auto text-center">
        <div className="space-y-5">
          <h2 className="text-6xl font-semibold line-lg">
            Lead Product Designer
          </h2>
          <p className="text-xl font-semibold text-zinc-500 text-balance max-w-[48ch]">
            Creating visually stunning & intuitive designs that provide
            exceptional user experiences.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
