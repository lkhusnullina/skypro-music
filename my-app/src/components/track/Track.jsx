import './Track.css'

function Track(props) {
  return (
    <div className="playlist__item" key={props.track.id}>
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href={props.track.trackNamelink}>
              {props.track.trackName}
              <span className="track__title-span">
                {props.track.trackTitlespan}
              </span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href={props.track.authorLink}>
            {props.track.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href={props.track.albumLink}>
            {props.track.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className="track__time-text">{props.track.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Track
