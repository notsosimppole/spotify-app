import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import Player from '../components/Player'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <Head>
        <title>Spotify Web Controller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
      props:{
        session,
      }
  }
}
