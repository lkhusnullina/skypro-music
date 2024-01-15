import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { useDispatch } from 'react-redux'
import { useGetFavoritesTracksQuery } from '../../service/getTracks'

export const FavoritesPage = ({ user }) => {
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();
    return (
        <>
          <S.Main>
            <Tracklist tracks={tracks} isLoading={isLoading} error={error} />
          </S.Main>
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