import { useState } from 'react'
import { useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Playlist.styles'

function Playlist(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <S.SidebarItem>
      <S.SidebarLink href={props.playlist.link}>
        {isLoading ? (
          <S.SkeletonAudioPlayer />
        ) : (
          <S.SidebarImg src={props.playlist.img} alt={props.playlist.name} />
        )}
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export default Playlist
