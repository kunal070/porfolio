import { Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from './components/Projects'
import CharacterSelection from './components/CharacterSelection'
import { useEffect } from 'react';
import { CharacterProvider } from './context/charcter.context';


export default function App() {

  useEffect(() => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    window.sessionStorage.setItem('isMobile', isMobileDevice ? '1' : '0');
  }, [])

  return (
    <>
      <CharacterProvider>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/characters' element={<CharacterSelection />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        {/* border-top: 4px solid #b3e7fe; */}
        {/* box-shadow: 2px solid #040404; */}
        <ToastContainer hideProgressBar={true} closeButton={false} toastStyle={{ backgroundColor: "#248df6", borderRadius: 0, border: "2px solid #0b4599", borderTop: "4px solid #0b4599", borderBottom: "4px solid #0b4599", boxShadow: "20px solid #040404", transform: "skewX(-9deg)" }} />
      </CharacterProvider>
    </>
  )


}