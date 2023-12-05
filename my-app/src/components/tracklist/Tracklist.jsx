import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import * as S from './Tracklist.styles'

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
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH>Треки</S.CenterblockH>
      <FilterBlock />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {tracks.map((t) => (
            <Track key={t.id} track={t} />
          ))}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default Tracklist
