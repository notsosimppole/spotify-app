import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import Head from 'next/head'
import Image from 'next/image'

const Login = ({providers}) => {

  return (
    
    <div className='flex flex-col bg-black min-h-screen w-full justify-center items-center'>
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <img src="https://i.ibb.co/6Bq88SL/logo.png" className='h-[200px] w-[300px] mb-5 mr-2' />

      {
        Object.values(providers).map((provider) => (

          <div key={provider} className="px-16 ">
            <button className=' bg-green-400 rounded-full p-5 m-auto text-white' onClick={() => signIn(provider.id,{callbackUrl : "/"})}>
              Login with {provider.name}
            </button>
          </div>
        ))
      }

    </div>
  )
}

export default Login

export async function getServerSideProps(){
  const providers = await getProviders()

  return{
    props:{
      providers,
    },
  }
}