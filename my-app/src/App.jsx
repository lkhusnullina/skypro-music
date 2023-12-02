// import './App.css'
import * as S from './App.styles'
import { SkeletonTheme } from 'react-loading-skeleton'
import AudioPlayer from './components/player/AudioPlayer'
import NavMenu from './components/menu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'
import Tracklist from './components/tracklist/Tracklist'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <S.Main>
              <NavMenu />
              <Tracklist />
              <Sidebar />
            </S.Main>
            <AudioPlayer />
            <footer className="footer" />
          </SkeletonTheme>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
