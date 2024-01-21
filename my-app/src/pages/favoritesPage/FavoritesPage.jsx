import * as S from '../../App.styles'
import {  useGetFavoritesTracksQuery } from '../../service/getTracks'
import FavTracklist from '../../components/favTracklist/FavTracklist';
import { useEffect } from 'react';
import { setFavorite } from '../../store/musicSlice';
import { useDispatch } from 'react-redux';


export const FavoritesPage = () => {
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();
    const dispatch = useDispatch();

    useEffect(() => {
      if (tracks) {
        dispatch(setFavorite({tracks}));
      }
    }, [tracks])
    
    return (
      <>
        <S.Main>
          <FavTracklist tracks={tracks} isLoading={isLoading} error={error} playlistId={'favPlaylistId'}/>
        </S.Main>
      </>
    )
}