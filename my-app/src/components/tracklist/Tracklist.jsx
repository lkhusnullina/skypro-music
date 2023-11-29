import FilterBlock from '../filter/FilterBlock'
import Track from '../track/Track'
import './Tracklist.css'
import styled from 'styled-components'

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

const StyledMainCenterblock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
const StyledCenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
const StyledCenterblockH = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
const StyledCenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
const StyledSearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
const StyledSearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  $::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  $:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  $::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  $::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
const StyledContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
const StyledContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
const StyledPlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
const StyledPlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
// const Styled = styled.div``
// const Styled = styled.div``
// const Styled = styled.div``

function Tracklist() {
  return (
    <StyledMainCenterblock>
      <StyledCenterblockSearch>
        <StyledSearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </StyledSearchSvg>
        <StyledSearchText type="search" placeholder="Поиск" name="search" />
      </StyledCenterblockSearch>
      <StyledCenterblockH>Треки</StyledCenterblockH>
      <FilterBlock />
      <StyledCenterblockContent>
        <StyledContentTitle>
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <StyledPlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </StyledPlaylistTitleSvg>
          </div>
        </StyledContentTitle>
        <StyledContentPlaylist>
          {tracks.map((t) => (
            <Track key={t.id} track={t} />
          ))}
        </StyledContentPlaylist>
      </StyledCenterblockContent>
    </StyledMainCenterblock>
  )
}

export default Tracklist
