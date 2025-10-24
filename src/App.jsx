import Head from './components/Head'
import './App.css'
import PageWrapper from "./components/PageWrapper";
import { AnimatePresence } from 'framer-motion';
import Info from './components/info'
import Courses from './components/ Courses';
import Sections from './components/sections';
import { Routes, Route, useLocation } from "react-router-dom";
import Schedule from './components/schedule';



function App() {
  const location = useLocation(); 

  return (
    <>
      <Head />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Info /></PageWrapper>} />
          <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
          <Route path="/sections" element={<PageWrapper><Sections /></PageWrapper>} />
          <Route path="/schedule" element={<PageWrapper><Schedule /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;