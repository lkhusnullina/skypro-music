
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext(null);
export const useUserContext = () => {
  return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
