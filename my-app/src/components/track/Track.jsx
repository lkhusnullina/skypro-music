import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'

function Track(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <S.PlaylistItem key={props.track.id}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          {isLoading ? (
            <S.SkeletAuthor>
              <Skeleton />
            </S.SkeletAuthor>
          ) : (
            <div>
              <S.TrackTitleLink href={props.track.trackNamelink}>
                {props.track.trackName}
                <S.TrackTitleSpan>
                  {props.track.trackTitlespan}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          )}
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading ? (
            <S.SkeletBlock>
              <Skeleton />
            </S.SkeletBlock>
          ) : (
            <S.TrackAuthorLink href={props.track.authorLink}>
              {props.track.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading ? (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton />
            </SkeletonTheme>
          ) : (
            <S.TrackAlbumLink href={props.track.albumLink}>
              {props.track.album}
            </S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          {isLoading ? (
            <S.TrackTimeText>0:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{props.track.time}</S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default Track
