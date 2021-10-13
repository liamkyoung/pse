import Head from 'next/head'
import Header from '../components/Header.js'
import Body from '../components/Body.js'
import Reasons from '../components/Reasons.js'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Pi Sigma Epsilon</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/pse_icon.jpg' />
      </Head>

      <div>
        {/* Header */}
        <Header />
      </div>
      <Body />
      <div className='flex justify-center'>
        <Reasons />
      </div>
    </div>
  )
}