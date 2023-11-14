import './App.css'
import AudioPlayer from './components/player/AudioPlayer'
import NavMenu from './components/menu/NavMenu'
import Sidebar from './components/sidebar/Sidebar'
import Tracklist from './components/tracklist/Tracklist'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <Tracklist />
          <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
