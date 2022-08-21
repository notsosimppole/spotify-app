import React, { useEffect, useState } from 'react'
import { signOut,useSession} from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from "lodash"
import { useRecoilState,useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'
import Songs from './Songs'


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
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

    useEffect(() => {
        setColor(shuffle(colors).pop())
    },[playlistId])

    useEffect(() => {
      spotifyApi
        .getPlaylist(playlistId)
        .then((data) => {
          setPlaylist(data.body);
        })
        .catch((err) => console.log('Something went wrong!', err));
    }, [spotifyApi, playlistId]);
    
    console.log(playlist)

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide '>
        <div className="flex items-center  bg-black space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 h-fit absolute top-5 right-8"
        onClick={signOut}
        >
            <img src = {session?.user.image} alt = "" className='rounded-full w-10 h-10' />
            <h2>{session?.user.name}</h2>
            <ChevronDownIcon className='h-5 w-5' />
        </div>

        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}>
            <img src = {playlist?.images?.[0]?.url} alt = ""  className='h-48 w-48 shadow-2xl'/>
            <div>
              <p>Playlist</p>
              <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold '>
                {playlist?.name}
              </h1>
            </div>
            
        </section>

        <div>
          <Songs />
        </div>

    </div>
  )
}

export default Center
