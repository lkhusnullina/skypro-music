import Playlist from '../playlist/Playlist'
import * as S from './Sidebar.styles'
import { Categories } from '../../constans.js'

const playlists = [
  {
    id: 1,
    name: `day's playlist`,
    img: 'img/playlist01.png',
    link: '/category',
  },
  {
    id: 2,
    name: `day's playlist`,
    img: 'img/playlist02.png',
    link: '/category',
  },
  {
    id: 3,
    name: `day's playlist`,
    img: 'img/playlist03.png',
    link: '/category',
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
          {Categories.map((category) => (
            <Playlist key={category.id} category={category} />
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
