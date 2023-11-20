import AuthorButton from './AuthorButton'
import './FilterBlock.css'
import GengeButton from './GengeButton'
import YearButton from './YearButton'

function FilterBlock() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div className="filter__button button-genre _btn-text">жанру</div>
      <div className="popupBlock">
        <div className="popupContainer">
          <ul className="popup">
            <li className="popup-item">Nero</li>
            <li className="popup-item">Стоункат, Psychopath</li>
            <li className="popup-item">Nero</li>
            <li className="popup-item">Ali Bakgor</li>
            <li className="popup-item">Nero</li>
            <li className="popup-item">Стоункат, Psychopath</li>
            <li className="popup-item">Nero</li>
            <li className="popup-item">Ali Bakgor</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterBlock
