import Playlist from '../playlist/Playlist'
import * as S from './Sidebar.styles'

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
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarName>Sergey.Ivanov</S.SidebarName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {playlists.map((p) => (
            <Playlist key={p.id} playlist={p} />
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
