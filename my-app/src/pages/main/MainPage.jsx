import NavMenu from '../../components/menu/NavMenu'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracklist from '../../components/tracklist/Tracklist'
import * as S from '../../App.styles'
import { getTrackAll } from '../../api'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadTracks } from '../../store/musicSlice'

export const MainPage = ({ user }) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrackAll()
      .then((all) => {
        dispatch(loadTracks({ tracks: all }))
        setIsLoading(false)
        //throw new Error("Ошибка!")
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <S.Main>
        <NavMenu user={user} />
        <Tracklist isLoading={isLoading} error={error} />
        <Sidebar isLoading={isLoading} />
      </S.Main>
      <footer className="footer" />
    </>
  )
}
