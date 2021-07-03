import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import CurrentTimeProvider from './context/CurrentTime'
import FissuresScreen from './screens/FissuresScreen'
import VoidTraderScreen from './screens/VoidTraderScreen'

const App = () => {
  return (
    <Router>
      <CurrentTimeProvider>
        <Header />
        <Container>
          <Route path='/' component={FissuresScreen} exact />
          <Route path='/voidTrader' component={VoidTraderScreen} />
        </Container>
      </CurrentTimeProvider>
    </Router>
  )
}

export default App
