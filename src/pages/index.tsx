import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta charSet="utf-8" />

      <title>Next CRUD Users</title>
      <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
    </Head>

    </>
  )
}

export default Home
