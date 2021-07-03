import React, { useState, useEffect } from 'react'
export const CurrentTimeCtx = React.createContext(Date.now())

const CurrentTimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <CurrentTimeCtx.Provider value={currentTime}>
      {children}
    </CurrentTimeCtx.Provider>
  )
}

export default CurrentTimeProvider
