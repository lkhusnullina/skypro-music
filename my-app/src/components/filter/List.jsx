function List({ items }) {
  const list = items.map((item) => (
    <li className="popup-item" key={item.id}>
      {item.name}
    </li>
  ))
  return (
    <div className="popupBlock">
      <div className="popupContainer">
        <ul className="popup">{list}</ul>
      </div>
    </div>
  )
}

export default List
