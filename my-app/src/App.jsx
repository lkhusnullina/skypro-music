import './App.css'
import AudioPlayer from './components/AudioPlayer'
import NavMenu from './components/NavMenu'
import Sidebar from './components/Sidebar'
import Tracklist from './components/Tracklist'

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
