import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import {  useGetAllTracksQuery, useGetFavoritesTracksQuery } from '../../service/getTracks'
import FavTracklist from '../../components/favTracklist/FavTracklist';


export const FavoritesPage = () => {
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();
    console.log(isLoading, tracks);
    //const {data: tracks, isLoading, error} = useGetAllTracksQuery();

    return (
      <>
        <S.Main>
          <FavTracklist tracks={tracks} isLoading={isLoading} error={error} />
        </S.Main>
      </>
    )
}