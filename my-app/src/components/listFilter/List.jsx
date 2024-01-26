import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/musicSlice';
import * as S from './List.styles';

function List({ items, mode, selectedItems = [] }) {
  console.log(selectedItems)
  const dispatch = useDispatch();
  const handleFilter = (item) => {
    dispatch(setFilter({ filter: mode, value: item }))
  };
  const unicItems = [...new Set(items)];
  const list = unicItems.map((item, index) => (
    <S.PopupItem onClick={() => handleFilter(item)} key={item+index} $isActive={selectedItems.find(it => it == item.toLowerCase())}>
      {item} {selectedItems.find(it => it == item.toLowerCase()) ? "+" : ""}
    </S.PopupItem>
  ));
  return (
    <S.PopupBlock>
      <S.PopupContainer>
        <S.Popup>{list}</S.Popup>
      </S.PopupContainer>
    </S.PopupBlock>
  )
}

export default List
