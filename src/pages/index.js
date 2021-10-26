import Head from 'next/head'
import Header from '../components/Header.js'
import BodyTitle from '../components/BodyTitle.js'
import Reasons from '../components/Reasons.js'
import Popup from '../components/Popup.js'
import Footer from '../components/Footer.js'
import Section from '../components/Section.js'

export default function Home () {
  return (
    <div className='min-h-screen bg-pse_white'>
      <Head>
        <title>Pi Sigma Epsilon</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/pse_icon.jpg' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <div className='scrollable-parent max-w-screen-2xl mx-auto h-screen overflow-hidden'>
        <BodyTitle />
        <Section />
        <Reasons />
      </div>

      {/* <div>
        <Popup />
      </div>
      <Footer /> */}
    </div>
  )
}
