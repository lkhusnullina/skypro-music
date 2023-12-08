
import AudioPlayer from '../../components/player/AudioPlayer'
import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'

export const MainPage = () => {
    return (
        <>
            <S.Main>
              <NavMenu />
              <Tracklist />
              <Sidebar />
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
        </>

    )
}