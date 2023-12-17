
import AudioPlayer from '../../components/player/AudioPlayer'
import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { getTrackAll } from '../../api'
import { useEffect } from 'react'

export const MainPage = ({ user }) => {

  // useEffect(() => {
  //   console.log('useEffect');
  //   getTrackAll().then((all) => console.log(all))
  // }, [])
  

    return (
        <>
            <S.Main>
              <NavMenu 
                user={user} />
              <Tracklist />
              <Sidebar />
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
        </>
    )
}