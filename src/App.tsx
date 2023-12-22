import React, { ReactElement, useRef, useState } from 'react'
import useMousePosition from './useMousePosition'
import { motion } from 'framer-motion'
import useAutosizeTextArea from './textarea'

function App(): ReactElement {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const { x, y } = useMousePosition(ref)

  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value
    setValue(val)
  }

  return (
    <div className="min-h-[200vh] overflow-clip">
      <div
        className="fixed inset-0 hero-animation"
        ref={ref}
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        <div className="absolute inset-0 bg-[url('./assets/bg.png')] bg-center bg-no-repeat bg-cover"></div>
        <motion.div
          className="absolute inset-0 bg-[url('./assets/bg.png')] bg-center bg-no-repeat bg-cover filter grayscale brightness-[25%]"
          animate={{
            WebkitMaskImage: `radial-gradient(circle 125px at ${x}px ${y}px, rgba(0, 0, 0, ${
              isHovered ? 0 : 1
            }) 0%, black 100%)`,
            maskImage: `radial-gradient(circle 125px at ${x}px ${y}px, rgba(0, 0, 0, ${
              isHovered ? 0 : 1
            }) 0%, black 100%)`
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        ></motion.div>
      </div>
      <aside
        className={`fixed text-sm z-10 inset-0 right-auto flex flex-col p-4 pt-[5.5rem] overflow-auto border-r shadow-lg shadow-zinc-950 border-zinc-500/10 bg-neutral-800/50 backdrop-blur-lg w-80 transition-transform duration-500 ${
          isSidebar ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className="mb-4 border-t border-b border-t-zinc-500/20 border-b-zinc-950"></div>
        <div className="text-zinc-100">Yoo how's your day going?</div>
        <div className="sticky bottom-0 mt-auto">
          <div className="relative">
            <textarea
              onChange={handleChange}
              ref={textAreaRef}
              rows={5}
              value={value}
              spellCheck={false}
              className="min-h-[5lh] max-h-[10lh] w-full px-3 pl-12 py-3.5 placeholder:text-zinc-700 text-teal-400 transition-colors border shadow-inner outline-none resize-none rounded-xl border-zinc-500/20 bg-zinc-950/75 shadow-zinc-950 focus:border-zinc-600"
              placeholder="Send me a message..."
            ></textarea>
            <button
              type="button"
              className="absolute grid -mt-px text-xs text-white transition-colors bg-teal-600 rounded-full w-7 h-7 hover:bg-teal-700 top-3 left-3 place-content-center"
            >
              <div className="tracking-tight">?</div>
            </button>
          </div>
          <button
            type="submit"
            className="absolute bottom-0 right-0 px-4 py-4 font-semibold transition-colors hover:text-zinc-50"
          >
            Send
          </button>
        </div>
      </aside>
      <header className="fixed top-0 z-10 w-full p-6 mx-auto">
        <div className="flex items-center gap-3.5">
          <button
            type="button"
            onClick={() => {
              setIsSidebar((prevIsSidebar) => !prevIsSidebar)
            }}
            className="relative group text-left cursor-pointer flex items-center gap-3.5 -m-3 p-3 outline-none select-none"
          >
            <div
              className={`absolute inset-0 transition-opacity duration-500 rounded-lg opacity-0 pointer-events-none  bg-zinc-700/20 backdrop-blur-md backdrop-saturate-150 backdrop-brightness-150 ${
                isSidebar ? 'opacity-0' : 'group-hover:opacity-100'
              }`}
            ></div>
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none bg-zinc-700/25 ${
                isSidebar
                  ? ' left-auto h-10 w-10 top-3 opacity-50 group-hover:opacity-100 right-2.5 rounded-full '
                  : ' rounded-lg opacity-0 '
              }`}
            ></div>
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full ring-1 ring-zinc-950/75"
                src="./assets/me.jpeg"
              />
              <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500 ring-1 ring-zinc-950/75 -top-0.5 -left-0.5 animate-pulse"></span>
            </div>
            <div className="relative flex items-center gap-3.5 text-sm">
              <div>
                <h1 className="text-zinc-100 font-semibold drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
                  James Toone
                </h1>
                <p className="drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
                  jamestoone@me.com
                </p>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`w-8 h-8 transition-all duration-500 group-hover:text-current  ${
                    isSidebar
                      ? 'rotate-180 ml-6 text-current'
                      : '-ml-8 text-transparent group-hover:ml-0'
                  }`}
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`w-8 h-8 absolute top-1 right-[5px] text-current transition-all duration-500  ${
                    isSidebar ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`}
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </header>
      <section className="relative grid w-full min-h-screen p-6 mx-auto text-center pointer-events-none place-content-center hero-text-animation">
        <div className="space-y-2">
          <h2 className="tracking-[-0.5px] sm:whitespace-nowrap max-sm:pb-6 sm:leading-normal font-semibold text-6xl drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
            Lead Product Designer
          </h2>
          <p className="text-xl font-semibold text-zinc-400/90 text-balance w-full mx-auto max-w-[48ch] drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
            Creating visually stunning & intuitive designs that provide
            exceptional user experiences.
          </p>
        </div>
      </section>
      <section className="relative w-full min-h-screen p-6 mx-auto pointer-events-none hero-vinyl-animation">
        <div className="relative mx-auto max-w-7xl">
          <div className="sticky mb-40 top-32">
            <h3 className="tracking-[-0.5px] sm:whitespace-nowrap max-sm:pb-6 sm:leading-normal font-semibold text-3xl drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              Vinyl Visions
            </h3>
            <p className="text-xl font-semibold text-zinc-500/90 drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
              Brand Identity · Website Design · UX Design · UI Development
            </p>
          </div>
          <div className="relative -mx-3">
            <img src="./assets/VinylVisions.png" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen p-6 mx-auto pointer-events-none hero-prohire-animation">
        <div className="relative mx-auto max-w-7xl">
          <div className="sticky mb-40 top-32">
            <h3 className="tracking-[-0.5px] sm:whitespace-nowrap max-sm:pb-6 sm:leading-normal font-semibold text-3xl drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              Prohire
            </h3>
            <p className="text-xl font-semibold text-zinc-500/90 drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
              UX Design · UI Development
            </p>
          </div>
          <div className="relative -mx-3">
            <img src="./assets/VinylVisions.png" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen p-6 mx-auto pointer-events-none hero-prohire-animation">
        <div className="relative mx-auto max-w-7xl">
          <div className="sticky mb-40 top-32">
            <h3 className="tracking-[-0.5px] sm:whitespace-nowrap max-sm:pb-6 sm:leading-normal font-semibold text-3xl drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              Prohire
            </h3>
            <p className="text-xl font-semibold text-zinc-500/90 drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
              UX Design · UI Development
            </p>
          </div>
          <div className="relative -mx-3">
            <img src="./assets/VinylVisions.png" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-screen p-6 mx-auto pointer-events-none hero-prohire-animation"></section>
    </div>
  )
}

export default App
