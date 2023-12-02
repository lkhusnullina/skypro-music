import { useState } from 'react'
import List from '../listFilter/List'
import * as S from './FilterBlock.styles'

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
      <S.FilterButton
        className="filter__button button-author _btn-text"
        onClick={() => toggleVisibleFilter('author')}
      >
        исполнителю
      </S.FilterButton>
      {visibleFilter === 'author' && <List items={authors}></List>}
      <S.FilterButton
        className="filter__button button-year _btn-text"
        onClick={() => toggleVisibleFilter('year')}
      >
        году выпуска
      </S.FilterButton>
      {visibleFilter === 'year' && <List items={years}></List>}

      <S.FilterButton
        className="filter__button button-genre _btn-text"
        onClick={() => toggleVisibleFilter('genre')}
      >
        жанру
      </S.FilterButton>
      {visibleFilter === 'genre' && <List items={genres}></List>}
    </S.CentralblockFilter>
  )
}

export default FilterBlock
