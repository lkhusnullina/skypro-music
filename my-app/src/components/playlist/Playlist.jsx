import './Playlist.css'

import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Playlist(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href={props.playlist.link}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <img
            className="sidebar__img"
            src={props.playlist.img}
            alt={props.playlist.name}
          />
        )}
      </a>
    </div>
  )
}

export default Playlist
