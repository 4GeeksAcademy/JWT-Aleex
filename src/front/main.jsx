import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { StoreProvider } from './hooks/useGlobalReducer'
import { BackendURL } from './components/BackendURL'

const Main = () => {
  // Fuerza un banner visible para saber si renderiza
  const url = import.meta.env.VITE_BACKEND_URL
  return (
    <React.StrictMode>
      <div style={{background:'#eef', padding:12, textAlign:'center'}}>
        <strong>App montada</strong> • VITE_BACKEND_URL: {String(url || 'NO DEFINIDA')}
      </div>

      {!url
        ? <BackendURL />
        : (
          <StoreProvider>
            <RouterProvider router={router} />
          </StoreProvider>
        )
      }
    </React.StrictMode>
  )
}

const mount = document.getElementById('app') || document.getElementById('root')
if (!mount) throw new Error('No existe ni #app ni #root')

ReactDOM.createRoot(mount).render(<Main />)