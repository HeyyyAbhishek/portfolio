import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[70px] mb-8 md:mb-16 border-b border-border bg-primary-light/80 backdrop-blur-sm sticky top-0 z-50"
        >
            <nav className="flex items-center h-full w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <div className="w-full md:w-[40%] flex justify-start">
                    <motion.h1 
                        whileHover={{ scale: 1.05 }}
                        className="font-bold text-xl sm:text-2xl cursor-pointer"
                    >
                        <NavLink to="/">
                        <Logo />
                        </NavLink>
                    </motion.h1>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex justify-end flex-grow">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            viewBox="0 0 24 24" 
                            className="w-6 h-6 fill-current"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 w-[60%] justify-end">
                    <NavLink to="/" className="text-text-secondary hover:text-text transition-colors font-medium">
                        <span className="text-accent">#</span>home
                    </NavLink>
                    <NavLink to="/projects" className="text-text-secondary hover:text-text transition-colors font-medium">
                        <span className="text-accent">#</span>projects
                    </NavLink>
                    <NavLink to="/about" className="text-text-secondary hover:text-text transition-colors font-medium">
                        <span className="text-accent">#</span>about-me
                    </NavLink>
                    <NavLink to="/contact" className="text-text-secondary hover:text-text transition-colors font-medium">
                        <span className="text-accent">#</span>contact
                    </NavLink>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden w-full bg-primary-light border-t border-border shadow-lg"
                    >
                        <div className="flex flex-col items-center py-6 gap-7">
                            <NavLink 
                                to="/" 
                                className="text-text-secondary hover:text-text transition-colors font-medium text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent">#</span>home
                            </NavLink>
                            <NavLink 
                                to="/projects" 
                                className="text-text-secondary hover:text-text transition-colors font-medium text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent">#</span>projects
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                className="text-text-secondary hover:text-text transition-colors font-medium text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent">#</span>about-me
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className="text-text-secondary hover:text-text transition-colors font-medium text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="text-accent">#</span>contact
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header;