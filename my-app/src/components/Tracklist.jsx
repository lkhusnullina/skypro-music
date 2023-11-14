import Track from './Track'
import './Tracklist.css'

const tracks = [
  {
    id: 1,
    trackName: 'Guilt',
    trackNamelink: '#',
    author: 'Nero',
    authorLink: '#',
    album: 'Welcome Reality',
    albumLink: '#',
    time: '4:44',
  },
  {
    id: 2,
    trackName: 'Elektro',
    trackNamelink: '#',
    trackTitlespan: '',
    author: 'Dynoro, Outwork, Mr. Gee',
    authorLink: '#',
    album: 'Elektro',
    albumLink: '#',
    time: '2:22',
  },
  {
    id: 3,
    trackName: 'I’m Fire',
    trackNamelink: '#',
    trackTitlespan: '',
    author: 'Ali Bakgor',
    authorLink: '#',
    album: 'I’m Fire',
    albumLink: '#',
    time: '2:22',
  },
  {
    id: 4,
    trackName: 'Non Stop',
    trackNamelink: '#',
    trackTitlespan: ' (Remix)',
    author: 'Стоункат, Psychopath',
    authorLink: '#',
    album: 'Non Stop',
    albumLink: '#',
    time: '4:12',
  },
  {
    id: 5,
    trackName: 'Run Run',
    trackNamelink: '#',
    trackTitlespan: ' (feat. AR/CO)',
    author: 'Jaded, Will Clarke, AR/CO',
    authorLink: '#',
    album: 'Run Run',
    albumLink: '#',
    time: '2:54',
  },
  {
    id: 6,
    trackName: 'Eyes on Fire',
    trackNamelink: '#',
    trackTitlespan: ' (Zeds Dead Remix)',
    author: 'Blue Foundation, Zeds Dead',
    authorLink: '#',
    album: 'Eyes on Fire',
    albumLink: '#',
    time: '5:20',
  },
  {
    id: 7,
    trackName: 'Mucho Bien',
    trackNamelink: '#',
    trackTitlespan: ' (Hi Profile Remix)',
    author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    authorLink: '#',
    album: 'Mucho Bien',
    albumLink: '#',
    time: '3:41',
  },
  {
    id: 8,
    trackName: 'Knives n Cherries',
    trackNamelink: '#',
    trackTitlespan: '',
    author: 'minthaze',
    authorLink: '#',
    album: 'Captivating',
    albumLink: '#',
    time: '1:48',
  },
]

function Tracklist() {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {tracks.map((t) => (
            <Track key={t.id} track={t} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tracklist
