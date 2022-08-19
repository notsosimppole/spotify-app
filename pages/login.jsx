import React from 'react'
import {getProviders, signIn} from "next-auth/react"
import Image from 'next/image'

const Login = ({providers}) => {

  console.log(getProviders)

  return (
    <div>
      <Image alt = " " src = "https://www.fightforthefuture.org/actions/wp-content/uploads/2021/12/MrEk.jpg" className='h-[100px] mb-5' />

      {
        Object.values(providers).map((provider) => (

          <div key={provider}>
            <button >
              Test
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