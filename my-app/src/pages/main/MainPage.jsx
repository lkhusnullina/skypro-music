
import AudioPlayer from '../../components/player/AudioPlayer'
import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { getTrackAll } from '../../api'
import { useEffect, useState } from 'react'

export const MainPage = ({ user }) => {
  const [tracks, setTracks] = useState([{},{},{},{},{},{},{},{},{},{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrackAll().then((all) => { 
      setTracks(all);
      setIsLoading(false);
      //throw new Error("Ошибка!")
    }).catch ((error) => {
      setError(error.message)
    })
  }, [])
  

    return (
        <>
            <S.Main>
              <NavMenu user={user} />
              <Tracklist tracks={tracks} isLoading={isLoading} error={error}/>
              <Sidebar isLoading={isLoading}/>
            </S.Main>
            {/* <AudioPlayer /> */}
            <footer className="footer" />
        </>
    )
}