import * as S from './List.styles'

function List({ items }) {
  const list = items.map((item) => (
    <S.PopupItem key={item.id}>{item.name}</S.PopupItem>
  ))
  return (
    <S.PopupBlock>
      <S.PopupContainer>
        <S.Popup>{list}</S.Popup>
      </S.PopupContainer>
    </S.PopupBlock>
  )
}

export default List
