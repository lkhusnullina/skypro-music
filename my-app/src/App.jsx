import { SkeletonTheme } from 'react-loading-skeleton'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { useState } from "react";

function App() {
  const [user, setUser] = useState(localStorage.getItem("token"));

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <AppRoutes user={user}/>
          </SkeletonTheme>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App