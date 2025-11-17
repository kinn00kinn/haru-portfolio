// src/main.tsx (または App.tsx)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// BrowserRouter の代わりに HashRouter をインポート
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> ではなく <HashRouter> で囲む */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)