// import NavMenu from '../../components/menu/NavMenu'
// import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
// import { getTrackAll } from '../../api'
// import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTracks } from '../../store/musicSlice'
import { useGetAllTracksQuery } from '../../service/getTracks'


export const MainPage = ({ currentTrack }) => {
  const dispatch = useDispatch();
  //const [isLoading, setIsLoading] = useState(true)
  //const [error, setError] = useState(null)
  const {data: tracks, isLoading, error} = useGetAllTracksQuery();
 
  // useEffect(() => {
  //   getTrackAll()
  //     .then((all) => {
  //       dispatch(loadTracks({ tracks: all }))
  //       setIsLoading(false)
  //       //throw new Error("Ошибка!")
  //     })
  //     .catch((error) => {
  //       setError(error.message)
  //     })
  // }, [])

  // return (
  //   <>
  //     <S.Main>
  //       <NavMenu user={user} />
  //       <Tracklist tracks={tracks} isLoading={isLoading} error={error} />
  //       <Sidebar isLoading={isLoading} />
  //     </S.Main>
  //     {/* {currentTrack ? <AudioPlayer track={currentTrack} /> : null} */}
  //     <footer className="footer" />
  //   </>
  // )
  return (
    <>
      <S.Main>
        <Tracklist tracks={tracks} isLoading={isLoading} error={error} />
      </S.Main>
    </>
  )
}
