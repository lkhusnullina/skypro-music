import { useDispatch, useSelector } from 'react-redux'
import { setCurrentTrack, loadTracks } from '../../store/musicSlice'
import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'
import Skeleton from 'react-loading-skeleton'
import { useEffect } from 'react'

function Tracklist({ isLoading, tracks, error, playlistId, showFilters, playlistName }) {
  const dispatch = useDispatch();
  const { filters, order} = useSelector(state => state.music);
  useEffect(() => {
    if (tracks) dispatch(loadTracks({ tracks }));
  }, [tracks]);
  let i = 0;

  let filtredTracks = tracks;

  function filterTracks() {
    if (filters.author?.length) {
      filtredTracks = filtredTracks.filter((track) => filters.author.includes(track.author.toLowerCase()));
    }
    if (filters.genre?.length) {
      filtredTracks = filtredTracks.filter((track) => filters.genre.includes(track.genre.toLowerCase()));
    }
    // написать еще один  иф (проверка филтр.жанр тоже самое)
    //проверка если ордер не по уполчанию(делаю сортировку), sort из каждого элемента дату 
  }

  // const filteredAndSortTracks = () => {
  //   if (order === "Сначала новые") {
  //     return searchLetter
  //       .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
  //       .reverse()
  //   }
  //   if (sortTrackFilter === "Сначала старые") {
  //     return searchLetter
  //       .sort((a, b) => parseFloat(a.release_date) - parseFloat(b.release_date))
  //       .reverse()
  //   }
  //   if (sortTrackFilter === "По умолчанию" || !setSortTrackFilter) {
  //     return searchLetter
  //   }
  // }
  filterTracks();

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH>{playlistName}</S.CenterblockH>
      { showFilters ? (<FilterBlock tracks={tracks} />) : ('')}
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        {error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже: {error}</p>
        ) : filtredTracks && filtredTracks.length > 0 ? (
          <S.ContentPlaylist>
            {isLoading ? <Skeleton /> : filtredTracks.map((track) => {
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
