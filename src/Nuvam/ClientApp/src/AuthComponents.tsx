import React, { useCallback, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'reactstrap'
import { useAppDispatch } from './store/hooks'
import { clearUser, setUser } from './store/appSlice'

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button onClick={async () => await loginWithRedirect()}> Log In </Button>
  )
}

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <Button onClick={async () => await logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  )
}

export const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()

  const getTokens = useCallback(async () => {
    const access_token = await getAccessTokenSilently()
    dispatch(setUser({ ...user, access_token }))
  }, [getAccessTokenSilently, user, dispatch])

  useEffect(() => {
    if (user != null) {
      getTokens()
    } else {
      dispatch(clearUser())
    }
  }, [user, dispatch, getTokens])

  if (!isAuthenticated) {
    return (
      <></>
    )
  }

  if (isLoading || user === undefined) {
    return (
      <div>Loading ...</div>
    )
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}
