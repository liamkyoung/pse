import React from 'react'
import Head from 'next/head'
import Header from '../components/Header.js'

function members () {
  return (
    <div className='min-h-screen bg-pse_purple-dark'>
      <Head>
        <title>Pi Sigma Epsilon</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/pse_icon.jpg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap' rel='stylesheet' />
      </Head>
      <div>
        <Header />
      </div>
      Members
    </div>
  )
}

export default members
