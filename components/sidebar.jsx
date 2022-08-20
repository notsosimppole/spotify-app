import React, { useState, useEffect } from 'react'
import {HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon, LogoutIcon} from "@heroicons/react/outline"
import {signOut, useSession} from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import {  playlistIdState } from '../atoms/playlistAtom'

const Sidebar = () => {
  const [playlists, setPlaylists] = useState()
  const spotifyApi = useSpotify()
  const {data: session,status} = useSession()
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)


  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      }
    )}
  }, [session, spotifyApi])

  return (
    <div className='overflow-y-scroll scrollbar-hide h-screen '>
      <div className='text-gray-600 p-5 text-sm md:text-lg border-r-gray-900 space-y-4'>

      <button className='flex items-center space-x-2 hover:text-white' onClick={() => signOut()} >
          <LogoutIcon className='w-5 h-5'/>
          <p>Logout</p>
        </button>


        <button className='flex items-center space-x-2 hover:text-white' >
          <HomeIcon className='w-5 h-5'/>
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='w-5 h-5'/>
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='w-5 h-5'/>
          <p>Your Library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex items-center space-x-2 hover:text-white' >
          <HeartIcon className='w-5 h-5'/>
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='w-5 h-5'/>
          <p>Your Playlists</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='w-5 h-5'/>
          <p>Create Playlist</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />
        {playlists?.map((playlist) => (
          <p className=' cursor-pointer hover:text-white' key={playlist.id} onClick={() => setPlaylistId(playlist.id)}>
          {playlist.name}
        </p>
        ))}
        
      </div>
    </div>
    
  )
}

export default Sidebar