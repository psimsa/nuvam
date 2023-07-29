import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-rosn321n.us.auth0.com'
      clientId='n3wouBjqFvOXoaJdPsqJpAyi29xHg9ud'
      authorizationParams={{
        redirect_uri: window.location.origin
        /* audience: "https://dev-rosn321n.us.auth0.com/api/v2/",
                scope: "read:current_user update:current_user_metadata" */
      }} useRefreshTokens
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
