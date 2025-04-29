import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'
import InteractiveBackground from './InteractiveBackground'

function Layout() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col relative"
    >
      <InteractiveBackground />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  )
}

export default Layout
