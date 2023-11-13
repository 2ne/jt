import React, { ReactElement, useRef, useState } from 'react'
import useMousePosition from './useMousePosition'
import { motion } from 'framer-motion'

function App(): ReactElement {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const { x, y } = useMousePosition(ref)

  return (
    <div className="min-h-[200vh]">
      <div>
        <div className="bg-[url('./assets/noise.png')] fixed inset-0 z-50 pointer-events-none opacity-10"></div>
      </div>
      <div
        ref={ref}
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
      >
        <div className="pointer-events-none">
          <div className="absolute inset-0 bg-[url('./assets/bg.png')] bg-center bg-no-repeat bg-cover"></div>
          <motion.div
            className="absolute inset-0 bg-[url('./assets/bg.png')] bg-center bg-no-repeat bg-cover filter grayscale brightness-[25%]"
            animate={{
              WebkitMaskImage: `radial-gradient(circle ${
                isHovered ? '125px' : '0'
              } at ${x}px ${y}px, rgba(0, 0, 0, ${
                isHovered ? 0 : 1
              }) 0%, black 100%)`,
              maskImage: `radial-gradient(circle ${
                isHovered ? '125px' : '0'
              } at ${x}px ${y}px, rgba(0, 0, 0, ${
                isHovered ? 0 : 1
              }) 0%, black 100%)`
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
          ></motion.div>
        </div>
        <aside
          className={`fixed z-10 inset-0 right-auto flex flex-col p-4 pt-[5.5rem] overflow-auto border-r shadow-lg shadow-zinc-950 border-zinc-500/10 bg-neutral-900/75 backdrop-blur-lg w-80 transition-transform duration-500 ${
            isSidebar
              ? 'transform translate-x-0'
              : 'transform -translate-x-full'
          }`}
        >
          <div className="mb-4 border-t border-b border-t-zinc-500/20 border-b-zinc-950"></div>
          <div className="text-zinc-100">Yoo how's your day going?</div>
          <div className="sticky bottom-0 mt-auto">
            <textarea
              className="h-[5lh] max-h-[10lh] [form-sizing:content] w-full px-3 py-2 text-teal-500 transition-colors border shadow-inner outline-none resize-none rounded-xl border-zinc-500/20 bg-zinc-950/75 shadow-zinc-950 focus:border-zinc-600"
              placeholder="Type a message..."
            ></textarea>
            <button
              type="submit"
              className="absolute bottom-0 right-0 px-4 py-4 font-semibold"
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
                      isSidebar
                        ? 'rotate-0 opacity-100'
                        : '-rotate-180 opacity-0'
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
        <section className="relative grid w-full min-h-screen p-6 mx-auto text-center pointer-events-none position place-content-center">
          <div className="space-y-2">
            <h2 className="sm:whitespace-nowrap max-sm:pb-6 max-sm:line-through max-sm:decoration-[3px] max-sm:decoration-zinc-950 sm:leading-normal font-bold text-6xl sm:line drop-shadow-[0_0_12px_rgba(9,9,1,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600">
              Lead Product Designer
            </h2>
            <p className="text-xl font-semibold text-zinc-400/90 text-balance w-full mx-auto max-w-[48ch] drop-shadow-[0_0_12px_rgba(9,9,1,1)]">
              Creating visually stunning & intuitive designs that provide
              exceptional user experiences.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
