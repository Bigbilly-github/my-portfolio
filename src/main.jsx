import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx'
import Aboutme from './components/aboutme.jsx'
import Projects from './components/projects.jsx'
import Connect from './components/connect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <HashRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                
               
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
      </HashRouter>
  </StrictMode>,
)
