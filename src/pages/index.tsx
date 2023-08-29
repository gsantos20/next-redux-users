import User from 'components/User'
import React from 'react'
import { Container } from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <Container className='mt-3'>
      <User/>
    </Container>
  )
}

export default Home
