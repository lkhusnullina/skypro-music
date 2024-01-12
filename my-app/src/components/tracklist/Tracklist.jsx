import { useDispatch, useSelector } from 'react-redux'

import { setCurrentTrack } from '../../store/musicSlice'
import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'
import AudioPlayer from '../player/AudioPlayer'

function Tracklist(props) {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.music.tracks)
  const currentTrack = useSelector((state) => state.music.currentTrack)

  let i = 0
  const trackClick = (track) => {
    dispatch(setCurrentTrack({ id: track.id }))
  }

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
        {props.error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже: {props.error}</p>
        ) : (
          <S.ContentPlaylist>
            {tracks.map((track) => {
              return (
                <Track
                  key={`${track.id}${i++}`}
                  onClick={() => {
                    trackClick(track)
                  }}
                  track={track}
                  isLoading={props.isLoading}
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
