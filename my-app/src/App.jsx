import { SkeletonTheme } from 'react-loading-skeleton'
import * as S from './App.styles'
import { AppRoutes } from './routes'

function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <AppRoutes/>
          </SkeletonTheme>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App