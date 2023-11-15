import './App.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import AudioPlayer from './components/player/AudioPlayer'
import NavMenu from './components/menu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'
import Tracklist from './components/tracklist/Tracklist'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <main className="main">
            <NavMenu />
            <Tracklist />
            <Sidebar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </SkeletonTheme>
      </div>
    </div>
  )
}

export default App
