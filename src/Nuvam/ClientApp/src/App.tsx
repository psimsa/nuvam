import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Button } from 'reactstrap'

import './App.css'
import { LoginButton, LogoutButton, Profile } from './AuthComponents'
import { useLazyGetGreetingQuery } from './services/apiService'
import { useAppSelector } from './store/hooks'

function App () {
  const user = useAppSelector(state => state.app.user)

  return (
    <div className='app-container'>
      <header className='app-header'>
        <div className='logo'>My Logo</div>
        <div className='auth-actions'>
          {(user != null)
            ? <>
              Hello, {user.name}!
              <LogoutButton />
            </>
            : <LoginButton />}
        </div>
      </header>

      <nav className='side-panel'>...</nav>

      <main className='main-content'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </main>
    </div>

  )
}

export default App

export const Home: React.FC = () => {
  const [getGreeting, { data, error, isLoading, isFetching }] = useLazyGetGreetingQuery()

  return (
    <div>
      <h1>Home Page</h1>
      <Button color='primary' onClick={async () => await getGreeting(null, false)}>Click Me</Button>
      <pre>
        {(isLoading || isFetching) && <div>Loading...</div>}
        {(error != null) && <div>{JSON.stringify(error)}</div>}
        {(data != null) && <div>{data.message}</div>}
      </pre>
      <Profile />
    </div>
  )
}
