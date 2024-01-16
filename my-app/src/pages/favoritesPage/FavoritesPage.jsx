import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { useDispatch, useSelector } from 'react-redux'
import { useGetFavoritesTracksQuery } from '../../service/getTracks'
import AudioPlayer from '../../components/player/AudioPlayer'

export const FavoritesPage = ({ currentTrack }) => {
    // const currentTrack = useSelector((state) => state.music.currentTrack);
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();

    return (
        <>
          <S.Main>
            <Tracklist tracks={tracks} isLoading={isLoading} error={error} />
          </S.Main>
          {currentTrack ? <AudioPlayer track={currentTrack} /> : null}
        </>
      )
    // return (
    //     <div>
    //         <h1>My playlist</h1>
    //     </div>
    //     const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();
    //     все тоже самое по разметке 
    //     токен!!!
    // )
}