import { useState } from 'react'
import * as S from './NavMenu.styles'
import cn from "classnames";

function OpenMenu({ isOpen, user}) {
  const activeClassName = "underline";

  if (isOpen) {
    return (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/login" onClick={() => user ? localStorage.removeItem('token') : localStorage.setItem('token', 'token12iu183y') }>
                {user ? "Выйти" : "Войти"}
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuNav>
    )
  }
  return ''
}

function NavMenu({user}) {
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
      <OpenMenu isOpen={open} user={user} />
    </S.MainNav>
  )
}
export default NavMenu