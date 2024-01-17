import { useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.styles'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../service/getTracks'
import { getToken } from '../../api'
// import { useState } from 'react'

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

  const handleAddTrack = async (id) => {
      console.log(id);
      addTrack({ id });
  }

  const handleDeleteTrack = async (id) => {
    console.log(id);
    deleteTrack({ id });
}

  //const toggleLike = isLike ? handleDeleteTrack : handleAddTrack

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
          <S.TrackTimeSvg onClick={() => handleAddTrack(props.track.id)} alt="time">
            
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            
          </S.TrackTimeSvg>
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
