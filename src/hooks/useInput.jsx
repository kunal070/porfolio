import { useEffect, useState } from 'react'

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
  }
  )

  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    ShiftLeft: 'shift',
  }
  useEffect(() => {
    const handleKeyDown = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }))

    }

    const handleKeyUp = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }))
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  })

  const findKey = (key) => keys[key]
  return input
}
