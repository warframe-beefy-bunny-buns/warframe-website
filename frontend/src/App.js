import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Fissures from './components/Fissures'
import CurrentTimeProvider from './context/CurrentTime'

const App = () => {
  return (
    <CurrentTimeProvider>
      <Header />
      <Container>
        <Fissures />
      </Container>
    </CurrentTimeProvider>
  )
}

export default App
