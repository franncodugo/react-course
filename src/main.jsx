import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstComponent } from './components/FirstComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <FirstComponent title='Hola Mundo'/> 
  </React.StrictMode>,
)
