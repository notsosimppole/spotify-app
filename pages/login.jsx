import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import Image from 'next/image'

const Login = ({providers}) => {

  console.log()

  return (
    <div className='flex flex-col bg-black min-h-screen w-full justify-center items-center'>
      <img alt = " " src = "https://o.remove.bg/downloads/94c83772-027e-450e-ac6a-8eb6bbdcede3/MrEk-removebg-preview.png" className='h-[200px] mb-5' />

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