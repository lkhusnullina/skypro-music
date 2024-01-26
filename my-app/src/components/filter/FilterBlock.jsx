import { useState } from 'react'
import List from '../listFilter/List'
import * as S from './FilterBlock.styles'
import { BtnText } from '../../App.styles'
import { useSelector } from 'react-redux'

const authors = [
  {
    id: 1,
    name: 'Nero',
  },
  {
    id: 2,
    name: 'Dynoro, Outwork, Mr. Gee',
  },
  {
    id: 3,
    name: 'Ali Bakgor',
  },
  {
    id: 4,
    name: 'Стоункат, Psychopath',
  },
  {
    id: 5,
    name: 'Jaded, Will Clarke, AR/CO',
  },
]

const years = [
  {
    id: 1,
    name: '1997',
  },
  {
    id: 2,
    name: '1998',
  },
  {
    id: 3,
    name: '1999',
  },
]

const genres = [
  {
    id: 1,
    name: 'hip-hop',
  },
  {
    id: 2,
    name: 'rock',
  },
  {
    id: 3,
    name: 'jazz',
  },
  {
    id: 4,
    name: 'electro',
  },
]

function FilterBlock({ tracks }) {

  const filters = useSelector((state) => state.music.filters);
  const order = useSelector((state) => state.music.order);

  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  const authors = tracks?.map((track) => track.author);
  const genres = [...new Set(tracks?.map((track) => track.genre))];
  const modes = ['По умолчанию','Сначала новые','Сначала старые'];
  console.log(order);

  const auth = filters && filters['author']?.length ? filters['author'] : [];
  const authCount = auth.length;

  const gen = filters && filters['genre']?.length ? filters['genre'] : [];
  const genCount = gen.length;

  // const mod = filters && filters['order']?.length ? filters['order'] : [];
  // const modCount = mod.length;
  // console.log(modCount);
  //const modCount = mod.length;
  

  return (
    <S.CentralblockFilter>
        <S.FilterTitle>Искать по:
          <BtnText onClick={() => toggleVisibleFilter('author')} $isActive={visibleFilter === 'author' || (authCount > 0)}>
            исполнителю { authCount ? <S.Counter>{authCount > 0 ? authCount : ""}</S.Counter> : ''}
          </BtnText> 
          {visibleFilter === 'author' && <List items={authors} mode={"author"} selectedItems={auth}></List>}

          <BtnText onClick={() => toggleVisibleFilter('genre')} $isActive={visibleFilter === 'genre'|| (genCount > 0)}>
            жанру { genCount ? <S.Counter>{genCount > 0 ? genCount : ""}</S.Counter> : ''}
          </BtnText>
          {visibleFilter === 'genre' && <List items={genres} mode={'genre'} selectedItems={gen}></List>}
        </S.FilterTitle>
      
      <S.FilterTitle>Сортировка:
        <BtnText onClick={() => toggleVisibleFilter('mode')} $isActive={visibleFilter === 'mode'}>
          {/* По умолчанию { modCount ? <S.Counter>{modCount > 0 ? modCount : ""}</S.Counter> : ''} */}
        </BtnText> 
        
        {visibleFilter === 'mode' && <List items={modes} mode={"order"}></List>}
      </S.FilterTitle>
    </S.CentralblockFilter>
  )
}

export default FilterBlock
