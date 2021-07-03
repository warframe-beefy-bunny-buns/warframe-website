import React from 'react'
import { CurrentTimeCtx } from '../context/CurrentTime'
import { formatDistanceStrict } from 'date-fns'

const TimeView = ({ expiry }) => {
  const currentTime = React.useContext(CurrentTimeCtx)
  const expiryTime = new Date(expiry)

  return (
    <p>
      {expiryTime < currentTime
        ? 'Ended'
        : `Ends ${formatDistanceStrict(expiryTime, currentTime, {
            addSuffix: true,
          })}`}
    </p>
  )
}

export default TimeView
