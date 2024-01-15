import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, loadTracks } from '../../store/musicSlice'
import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'
import AudioPlayer from '../player/AudioPlayer'
import Skeleton from 'react-loading-skeleton'

function Tracklist({isLoading, tracks, error}) {
  const dispatch = useDispatch()
  // const tracks = useSelector((state) => state.music.tracks)
  const currentTrack = useSelector((state) => state.music.currentTrack);
  if (tracks) dispatch(loadTracks({ tracks }))
  let i = 0

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH>Треки</S.CenterblockH>
      <FilterBlock />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        {error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже: {error}</p>
        ) : (
          <S.ContentPlaylist>
            {isLoading ? <Skeleton /> : tracks.map((track) => {
              return (
                <Track
                  key={`${track.id}${i++}`}
                  onClick={() => {
                    dispatch(setCurrentTrack({ id: track.id }))
                  }}
                  track={track}
                  isLoading={isLoading}
                />
              )
            })}
          </S.ContentPlaylist>
        )}
      </S.CenterblockContent>
      {currentTrack ? <AudioPlayer track={currentTrack} /> : null}
    </S.MainCenterblock>
  )
}

export default Tracklist
