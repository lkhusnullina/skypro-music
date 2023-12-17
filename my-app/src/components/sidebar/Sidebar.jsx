import Playlist from '../playlist/Playlist'
import * as S from './Sidebar.styles'
import { Categories } from '../../constans.js'

function Sidebar(props) {
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
            <Playlist key={category.id} category={category} isLoading={props.isLoading}/>
          ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
