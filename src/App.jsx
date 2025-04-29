import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Layout from './Components/Layout'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
