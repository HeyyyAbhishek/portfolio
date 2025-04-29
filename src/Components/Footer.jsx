import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="w-full py-8 sm:py-10 mt-12 sm:mt-20 border-t border-border bg-primary-light/60"
    >
      <div className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
              <span className="text-accent">&lt;</span>
              HEK
              <span className="text-accent">/&gt;</span>
            </h2>
            <p className="text-text-secondary max-w-xs text-sm sm:text-base leading-relaxed">
              Full-stack developer crafting exceptional digital experiences
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4"><span className="text-accent">#</span>Social</h3>
            <div className="flex gap-4 sm:gap-6">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-secondary hover:text-text text-sm sm:text-base"
              >
                GitHub
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-secondary hover:text-text text-sm sm:text-base"
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-text-secondary hover:text-text text-sm sm:text-base"
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-text-secondary text-xs sm:text-sm pt-4 sm:pt-6 border-t border-border">
          © {new Date().getFullYear()} HEK. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
