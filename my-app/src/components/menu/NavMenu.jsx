import { useState } from 'react'
import * as S from './NavMenu.styles'

function OpenMenu({ isOpen }) {
  if (isOpen) {
    return (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink xlinkHref="#">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink xlinkHref="#">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="../signin.html">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuNav>
    )
  }
  return ''
}

function NavMenu() {
  const [open, setOpen] = useState(false)

  const toggleVisibility = () => {
    setOpen(!open)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      <OpenMenu isOpen={open} />
    </S.MainNav>
  )
}
export default NavMenu

// import { useState } from 'react'
// import './NavMenu.css'

// function NavMenu() {
//   const [isOpen, setOpen] = useState(false)

//   const toggleVisibility = () => {
//     setOpen(!isOpen)
//   }

//   return (
//     <nav className="main__nav nav">
//       <div className="nav__logo logo">
//         <img className="logo__image" src="img/logo.png" alt="logo" />
//       </div>
//       <div className="nav__burger burger" onClick={toggleVisibility}>
//         <span className="burger__line" />
//         <span className="burger__line" />
//         <span className="burger__line" />
//       </div>
//       <div className={isOpen ? 'nav__menu menu' : 'nav__menu__hidden menu'}>
//         <ul className="menu__list">
//           <li className="menu__item">
//             <a className="menu__link" xlinkHref="#">
//               Главное
//             </a>
//           </li>
//           <li className="menu__item">
//             <a xlinkHref="#" className="menu__link">
//               Мой плейлист
//             </a>
//           </li>
//           <li className="menu__item">
//             <a href="../signin.html" className="menu__link">
//               Войти
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }
// export default NavMenu
