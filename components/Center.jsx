import React, { useEffect, useState } from 'react'
import { useSession} from 'next-auth/react'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import { shuffle } from "lodash"
import { useRecoilState } from 'recoil'
import { playlistIdState, playlistState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'


const colors = [
    'from-indigo-500',
    'from-purple-500',
    'from-green-500',
    'from-red-500',
    'from-blue-500',
    'from-pink-500',
    'from-yellow-500'
]



const Center = () => {
    const {data: session} = useSession()
    const [color,setColor] = useState('from-black-500')
    const spotifyApi = useSpotify()
    const playlistId = useRecoilState(playlistIdState)
    const [playlist, setPlaylist] = useRecoilState(playlistState)

    useEffect(() => {
        setColor(shuffle(colors).pop())
    },[])

    useEffect(() => {
            spotifyApi.getPlaylist(playlistId).then((data) => {
              setPlaylist(data.body)
            }).catch(err => console.log("Error : ",err))}
    , [spotifyApi, playlistId])
    
    console.log(playlist)

  return (
    <div className='flex-grow'>
        <div className="flex items-center bg-red-300 space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 h-fit absolute top-5 right-8">
            <img src = {session?.user.image} alt = "" className='rounded-full w-10 h-10' />
            <h2>{session?.user.name}</h2>
            <ChevronDoubleDownIcon className='h-5 w-5' />
        </div>

        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}>
            <img src = {playlist?.image} alt = "" />
            
            <h1>HEHE</h1>
        </section>
    </div>
  )
}

export default Center
