import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div>
        {/*Player */}
      </div>
    </div>
  )
}

export default Home
