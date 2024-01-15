import { Outlet } from 'react-router-dom'
import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import * as S from '../../App.styles'

const PageLayout = ({ user, isLoading }) => {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <S.Main>
          <NavMenu user={user} />
            <Outlet />
          <Sidebar isLoading={isLoading} />
        </S.Main>
        <footer className="footer" />
      </S.Container>
    </>
  )
}

export { PageLayout }
