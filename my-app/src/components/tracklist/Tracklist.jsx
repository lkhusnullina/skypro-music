import { useDispatch } from 'react-redux'
import { setCurrentTrack, loadTracks } from '../../store/musicSlice'
import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'
import Skeleton from 'react-loading-skeleton'

function Tracklist({ isLoading, tracks, error, playlistId, showFilters }) {
  const dispatch = useDispatch();
  if (tracks) dispatch(loadTracks({ tracks }));
  let i = 0;

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH>Треки</S.CenterblockH>
      { showFilters ? (<FilterBlock />) : ('')}
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
        ) : tracks && tracks.length > 0 ? (
          <S.ContentPlaylist>
            {isLoading ? <Skeleton /> : tracks.map((track) => {
              return (
                <Track
                  key={`${track.id}${i++}`}
                  onClick={() => {
                    dispatch(setCurrentTrack({ id: track.id, playlistId }))
                  }}
                  track={track}
                  isLoading={isLoading}
                  playlistId={playlistId}
                />
              )
            })}
          </S.ContentPlaylist>
        ) : (
          <p>В этом плейтисте нет треков</p>
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default Tracklist
