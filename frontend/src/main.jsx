import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './contexts/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Add context provider to root level */}
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)
