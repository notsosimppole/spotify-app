import React from 'react'
import {HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon} from "@heroicons/react/outline"

const Sidebar = () => {
  return (
    <div>
      <div className='text-gray-600 p-5 text-sm md:text-lg border-r-gray-900 space-y-4'>
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

        {/* Playlists */}
        <p className=' cursor-pointer hover:text-white'>
          Playlist
        </p>
        <p className=' cursor-pointer hover:text-white'>
          Playlist
        </p>
        <p className=' cursor-pointer hover:text-white'>
          Playlist
        </p>
        <p className=' cursor-pointer hover:text-white'>
          Playlist
        </p>
      </div>
    </div>
    
  )
}

export default Sidebar