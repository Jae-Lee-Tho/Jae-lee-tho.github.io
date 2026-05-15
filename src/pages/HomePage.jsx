import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Achievements from '../sections/Achievements'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
