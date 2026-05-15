import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ProjectDetail from './pages/ProjectDetail'
import AchievementDetail from './pages/AchievementDetail'
import IntroLoader from './components/IntroLoader'
import { useLenis } from './hooks/useLenis'

export default function App() {
  const location = useLocation()
  useLenis()

  /* Show intro once per session */
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem('intro-seen') === 'true'
  )

  function handleIntroComplete() {
    sessionStorage.setItem('intro-seen', 'true')
    setIntroDone(true)
  }

  return (
    <>
      {!introDone && <IntroLoader onComplete={handleIntroComplete} />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/achievements/:slug" element={<AchievementDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
