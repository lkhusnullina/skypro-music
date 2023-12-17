
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
  useEffect(() => {
    getTrackAll().then((all) => {
      setTracks(all);
      setIsLoading(false);
    });
  }, [])
  

    return (
        <>
            <S.Main>
              <NavMenu user={user} />
              <Tracklist tracks={tracks} isLoading={isLoading} />
              <Sidebar isLoading={isLoading}/>
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
        </>
    )
}