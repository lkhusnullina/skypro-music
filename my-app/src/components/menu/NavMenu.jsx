import { useState } from 'react'
import * as S from './NavMenu.styles'
import cn from "classnames";

function OpenMenu({ isOpen, user, onAuthButtonClick }) {
  const activeClassName = "underline";
  if (isOpen) {
    return (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink to="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/favorites" 
                        className={({ isActive }) =>
                          cn("App-link", {
                            [activeClassName]: isActive,
                          })
                        }
                      >
                        Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink 
                  to="/login" 
                  className={({ isActive }) =>
                  cn("App-link", {
                    [activeClassName]: isActive,
                  })
                }
              >
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