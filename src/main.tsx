import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1'
import 'bootstrap/dist/css/bootstrap.css'
import './components/index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
)
