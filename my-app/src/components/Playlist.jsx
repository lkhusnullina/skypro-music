import './Playlist.css'

function Playlist(props) {
  return (
    <div className="sidebar__item" key={props.playlist.id}>
      <a className="sidebar__link" href={props.playlist.link}>
        <img
          className="sidebar__img"
          src={props.playlist.img}
          alt={props.playlist.name}
        />
      </a>
    </div>
  )
}

export default Playlist
