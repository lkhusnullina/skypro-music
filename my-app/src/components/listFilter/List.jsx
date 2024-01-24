import { useDispatch } from 'react-redux';
import * as S from './List.styles';

function List({ items, mode }) {
  const dispatch = useDispatch()
  const handleFilter = (item) => {
    dispatch(setFilter({ filter: mode, value: item }))
  }

  const list = items.map((item) => (
    <S.PopupItem onClick={() => handleFilter(item)} key={index}>
      {item}
    </S.PopupItem>
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
