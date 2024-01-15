import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../service/getTracks'
import { useState } from 'react'

function Track(props) {
  const time = props.track.duration_in_seconds
  const minutes = Math.trunc(time / 60)
  const seconds = time - minutes * 60
  const timeTrack = `${minutes <= 9 ? '0' + minutes : minutes}:${
    seconds <= 9 ? '0' + seconds : seconds
  }`;

  const [addTrack] = useAddFavoriteTrackMutation();
  const [deleteTrack] = useDeleteFavoriteTrackMutation();
  // console.log(props.track);
  const currentTrack = useSelector((state) => state.music.currentTrack)
  const isPlaying = useSelector((state) => state.music.isPlaying)

  // const handleAddTrack = async () => {
  //   if (isLike) {
  //     await addTrack({ name: isLike }).unwrap()
  //     setIsLike(true)
  //     console.log(addTrack)
  //   }
  // }

  // const handleDeleteTrack = async () => {
  //   await deleteTrack(id).unwrap();
  //   setIsLike(false)
  //   console.log(2222);
  // }

  // const toggleLike = isLike ? handleDeleteTrack : handleAddTrack

  return (
    <S.PlaylistItem onClick={props.onClick}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack != null && props.track.id == currentTrack.id ? (
              <S.Playingdot $isPlaying={isPlaying}></S.Playingdot>
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          {props.isLoading ? (
            <S.SkeletAuthor>
              <Skeleton />
            </S.SkeletAuthor>
          ) : (
            <div>
              <S.TrackTitleLink href="#">
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
            <S.TrackAuthorLink href="#">{props.track.author}</S.TrackAuthorLink>
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
          {/* <S.TrackTimeSvg onClick={toggleLike} alt="time">
            {isPlaying ? (
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.36529 12.751C14.2458 9.25098 17.3111 3.96019 13.9565 1.51832C11.7563 -0.0832586 9.29718 1.19273 8.36529 2.00669H8.34378H8.34372H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34372H8.34378H8.36529Z"
                  fill="#B672FF"
                />
                <path
                  d="M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378"
                  stroke="#B672FF"
                />
              </svg>
            ) : (
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            )}
          </S.TrackTimeSvg> */}
          {props.isLoading ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{timeTrack}</S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default Track
