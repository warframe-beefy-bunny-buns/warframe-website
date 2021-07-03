import React from 'react'
import { Card } from 'react-bootstrap'
import TimeView from './TimeView'
import { CurrentTimeCtx } from '../context/CurrentTime'

const Fissure = ({ fissure }) => {
  const currentTime = React.useContext(CurrentTimeCtx)

  return (
    <>
      <Card
        className='my-3 p-3 rounded'
        border={!fissure.isStorm ? 'success' : 'warning'}
      >
        <Card.Body>
          <Card.Title as='div' className='pb-4'>
            <strong>
              {fissure.missionType} at {fissure.node}
            </strong>
          </Card.Title>

          <Card.Text as='div'>
            <p>Tier: {fissure.tier}</p>
            <p>Mission Type: {fissure.missionKey}</p>
            <p>Enemy Type: {fissure.enemy}</p>
            <p>
              {fissure.expired || fissure.expiry > currentTime ? (
                `Expired`
              ) : (
                <TimeView expiry={fissure.expiry} />
              )}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Fissure
