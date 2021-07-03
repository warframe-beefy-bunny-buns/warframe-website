import React from 'react'
import { CurrentTimeCtx } from '../context/CurrentTime'
import { formatDistanceStrict } from 'date-fns'

const TimeView = ({ expiry }) => {
  const currentTime = React.useContext(CurrentTimeCtx)

  return (
    <p>
      Ends{' '}
      {formatDistanceStrict(new Date(expiry), currentTime, {
        addSuffix: true,
      })}
    </p>
  )
}

export default TimeView
