import { motion } from "framer-motion";

function Quote({ quote, author }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex flex-col items-end w-full"
    >
      <div className="quote-container w-full">
        <p className="quote text-base sm:text-xl md:text-2xl p-4 sm:p-8 border-2 border-border rounded-t-md relative">
          {quote}
        </p>
      </div>
      <motion.p 
        whileHover={{ x: 10 }}
        className="text-sm sm:text-base border-2 border-border p-3 sm:p-4 border-t-0 rounded-b-md bg-tech-bg"
      >
        - {author}
      </motion.p>
    </motion.div>
  );
}

export default Quote;