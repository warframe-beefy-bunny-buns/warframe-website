import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const VoidTraderScreen = () => {
  const [baro, setBaro] = useState({})

  useEffect(() => {
    const fetchFissures = async () => {
      const { data } = await axios.get(
        'https://api.warframestat.us/pc/voidTrader'
      )

      setBaro(data)
    }

    fetchFissures()
  }, [])

  return (
    <>
      <h1>Baro Ki'Teer</h1>
      {!baro.active ? (
        <h3>No Baro today. Sad Rhino noises...</h3>
      ) : (
        <>
          <h3>Baro is here!!! Go buy something!</h3>
          <Table striped borderless hover responsive variant='dark'>
            <thead>
              <th>Item</th>
              <th>Ducats</th>
              <th>Credits</th>
            </thead>
            <tbody>
              {baro.inventory.map((item) => (
                <tr>
                  <td>{item.item}</td>
                  <td>{item.ducats}</td>
                  <td>{new Intl.NumberFormat().format(item.credits)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default VoidTraderScreen
