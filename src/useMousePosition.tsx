import { useState, useEffect, RefObject } from 'react'

const useMousePosition = (elementRef: RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = (e: MouseEvent) => {
    if (elementRef.current) {
      const { left, top } = elementRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - left,
        y: e.clientY - top
      })
    }
  }

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.addEventListener('mousemove', updateMousePosition)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [elementRef])

  return mousePosition
}

export default useMousePosition
