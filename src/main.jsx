import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { PreLoader } from './components/PreLoader'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <NavBar />
    <App />
    <Footer />
  </StrictMode>,
)
