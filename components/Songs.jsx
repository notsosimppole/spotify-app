import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

const Songs = () => {

    const playlist = useRecoilValue(playlistState)

  return (
    <div className='px-8 flex flex-col space-y-1 text-white pb-28'>
      {playlist?.tracks.items.map((track,i)=> (
        <Song key = {track.track.id} track = {track} order= {i} />
      ))}
    </div>
  )
}

export default Songs
