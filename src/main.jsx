import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'animate.css';
import { Preloader } from './components/ui/Preloader.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500,
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <App />
  </StrictMode>,
)
