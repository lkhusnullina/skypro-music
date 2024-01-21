import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { useGetAllTracksQuery } from '../../service/getTracks'


export const MainPage = () => {
  const {data: tracks, isLoading, error} = useGetAllTracksQuery();
  
  return (
    <>
      <S.Main>
        <Tracklist tracks={tracks} isLoading={isLoading} error={error} playlistId={'mainPlaylistId'}/>
      </S.Main>
    </>
  )
}
