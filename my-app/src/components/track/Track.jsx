import './Track.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Track(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="playlist__item" key={props.track.id}>
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <div>
              {isLoading ? (
                <Skeleton />
              ) : (
                <a
                  className="track__title-link"
                  href={props.track.trackNamelink}
                >
                  {props.track.trackName}
                  <span className="track__title-span">
                    {props.track.trackTitlespan}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="track__author">
          {isLoading ? (
            <Skeleton />
          ) : (
            <a className="track__author-link" href={props.track.authorLink}>
              {props.track.author}
            </a>
          )}
        </div>
        <div className="track__album">
          {isLoading ? (
            <Skeleton />
          ) : (
            <a className="track__album-link" href={props.track.albumLink}>
              {props.track.album}
            </a>
          )}
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          {isLoading ? (
            <span className="track__time-text">0:00</span>
          ) : (
            <span className="track__time-text">{props.track.time}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Track
