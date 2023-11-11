import Playlist from './Playlist'
import './Sidebar.css'

const playlists = [
  {
    id: 1,
    name: `day's playlist`,
    img: 'img/playlist01.png',
    link: '#',
  },
  {
    id: 2,
    name: `day's playlist`,
    img: 'img/playlist02.png',
    link: '#',
  },
  {
    id: 3,
    name: `day's playlist`,
    img: 'img/playlist03.png',
    link: '#',
  },
]

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          {playlists.map((p) => (
            <Playlist key={p.id} playlist={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
