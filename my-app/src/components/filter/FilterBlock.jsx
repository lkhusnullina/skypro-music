import { useState } from 'react'
import List from '../listFilter/List'
import * as S from './FilterBlock.styles'
import { BtnText } from '../../App.styles'

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

function FilterBlock() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <S.CentralblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <BtnText onClick={() => toggleVisibleFilter('author')} isActive={visibleFilter === 'author'}>
        исполнителю
      </BtnText> 
      {visibleFilter === 'author' && <List items={authors}></List>}
      <BtnText onClick={() => toggleVisibleFilter('year')} isActive={visibleFilter === 'year'}>
        году выпуска
      </BtnText>
      {visibleFilter === 'year' && <List items={years}></List>}

      <BtnText onClick={() => toggleVisibleFilter('genre')} isActive={visibleFilter === 'genre'}>
        жанру
      </BtnText>
      {visibleFilter === 'genre' && <List items={genres}></List>}
    </S.CentralblockFilter>
  )
}

export default FilterBlock
