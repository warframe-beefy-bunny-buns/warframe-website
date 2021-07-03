import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Fissure from '../components/Fissure'

const FissuresScreen = () => {
  const [fissures, setFissures] = useState([])

  useEffect(() => {
    const fetchFissures = async () => {
      const { data } = await axios.get(
        'https://api.warframestat.us/pc/fissures'
      )

      setFissures(data)
    }

    fetchFissures()
  }, [])

  return (
    <>
      <h1>Fissures</h1>
      <p>
        <strong>Refresh the screen to update the list</strong>
      </p>
      <Row>
        {fissures.map((fissure) => (
          <Col
            key={fissure.id}
            className='d-flex align-items-stretch'
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Fissure fissure={fissure} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default FissuresScreen
