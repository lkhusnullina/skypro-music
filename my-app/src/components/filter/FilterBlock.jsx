import './FilterBlock.css'
import { useState } from 'react'
import List from './List'
import styled from 'styled-components'

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

const StyledCentralblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`
const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

function FilterBlock() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }

  return (
    <StyledCentralblockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <div
        className="filter__button button-author _btn-text"
        onClick={() => toggleVisibleFilter('author')}
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && <List items={authors}></List>}
      <div
        className="filter__button button-year _btn-text"
        onClick={() => toggleVisibleFilter('year')}
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && <List items={years}></List>}

      <div
        className="filter__button button-genre _btn-text"
        onClick={() => toggleVisibleFilter('genre')}
      >
        жанру
      </div>
      {visibleFilter === 'genre' && <List items={genres}></List>}
    </StyledCentralblockFilter>
  )
}

export default FilterBlock
