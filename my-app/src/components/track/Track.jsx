import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'

function Track(props) {

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }, [])

  const time = props.track.duration_in_seconds;
  const minutes = Math.trunc(time / 60);
  const seconds = time - (minutes * 60);
  const timeTrack = `${minutes}:${seconds <= 9 ? '0' + seconds : seconds}`
  
  return (
    <S.PlaylistItem key={props.track.id}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          {props.isLoading ? (
            <S.SkeletAuthor>
              <Skeleton />
            </S.SkeletAuthor>
          ) : (
            <div>
              <S.TrackTitleLink href={props.track.track_file}>
                {props.track.name}
                <S.TrackTitleSpan>
                  {props.track.trackTitlespan}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          )}
        </S.TrackTitle>
        <S.TrackAuthor>
          {props.isLoading ? (
            <S.SkeletBlock>
              <Skeleton />
            </S.SkeletBlock>
          ) : (
            <S.TrackAuthorLink href={props.track.track_file}>
              {props.track.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {props.isLoading ? (
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
          {props.isLoading ? (
            <S.TrackTimeText>0:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{timeTrack}</S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default Track
