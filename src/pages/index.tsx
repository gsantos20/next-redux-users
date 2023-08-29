import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import User from 'components/User'
import React from 'react'
import { Container } from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main className='mt-4'>
        <Container>
          <User/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default Home
