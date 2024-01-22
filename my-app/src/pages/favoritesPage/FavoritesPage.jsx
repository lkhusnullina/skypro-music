import * as S from '../../App.styles'
import {  useGetFavoritesTracksQuery } from '../../service/getTracks'
import Tracklist from '../../components/tracklist/Tracklist'
import { useEffect } from 'react';
import { setFavorite } from '../../store/musicSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user'


export const FavoritesPage = () => {
    const {data: tracks, isLoading, error} = useGetFavoritesTracksQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logout } = useUserContext();

    useEffect(() => {
      if (tracks) {
        dispatch(setFavorite({tracks}));
      }
    }, [tracks])

    if (error && error.status == 401)  {
      logout();
      navigate('/login');
    }
    
    return (
      <>
        <S.Main>
          <Tracklist tracks={tracks} isLoading={isLoading} error={error} playlistId={'favPlaylistId'} showFilters={false}/>
        </S.Main>
      </>
    )
}