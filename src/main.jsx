import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import ContextProvider from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-jusnb8llpbfsbgtu.us.auth0.com"
    clientId="jiBlZniHjT5iSntbjiUL0cn2gjy0NX2L"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <AppProvider>
    <App />
    </AppProvider> */}
  <ContextProvider>
  <App />
  </ContextProvider>
  </Auth0Provider>
)
