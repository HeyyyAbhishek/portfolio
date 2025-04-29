import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hover from "../Components/Hover";
import Quote from "../Components/Quote";
import { ProjectList } from "../Components/Project";
import { Link } from "react-router-dom";

function Home() {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random/1')
      .then(res => res.json())
      .then(data => {
        if (data && data[0]) {
          setQuoteData({
            quote: data[0].quote,
            author: data[0].author
          });
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        setIsLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center min-h-[20rem] sm:min-h-[26.5rem] w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto gap-8 md:gap-12 pb-10 md:pb-16"
      >
        <motion.div variants={itemVariants} className="w-full md:w-[50%]">
          <h1 className="mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
            <span className="text-text">HEK</span> here, A{" "}
            <span className="text-accent">Full-Stack Self taught </span> Developer
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            I'm passionate about turning designs into reality, focusing on writing clean code and creating smooth, enjoyable user experiences. Let's team up and elevate the web together! ✨💻 #FrontEndDev #CodeCrafting
          </p>
          <Hover>
            <Link to="/contact" className="inline-block text-sm sm:text-base border-2 border-accent px-4 sm:px-6 py-2 mt-6 sm:mt-8 hover:bg-accent/20 transition-colors rounded-md font-medium">
              Contact me !!
            </Link>
          </Hover>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-[50%] flex justify-center"
        >
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, 0]
            }} 
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="border-2 border-accent rounded-md p-4 sm:p-6 bg-primary-light shadow-custom relative max-w-[320px] w-full"
          >
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 absolute -top-2 -left-2 -z-10 rounded-md"></div>
            <h2 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-bold">
              <span className="text-accent">{"<"}</span>
              Code
              <span className="text-accent">{"/>"}</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">Creating digital experiences through clean code.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16 sm:mt-20 md:mt-28 bg-primary-light p-4 sm:p-8 rounded-lg shadow-card"
      >
        <div className="flex flex-col items-center w-full md:w-[80%] mx-auto">
          {isLoading ? (
            <p className="text-center text-text-secondary">Loading quote...</p>
          ) : (
            <Quote 
              quote={quoteData.quote}
              author={quoteData.author}
            />
          )}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16 sm:mt-20 md:mt-28"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold relative mb-4 md:mb-0">
            <span className="text-accent">#</span>projects
            <div className="hidden md:block absolute top-1/2 h-[2px] bg-accent w-[120px] sm:w-[200px] ml-[90px] sm:ml-[120px]"></div>
          </h2>
          <Hover>
            <Link to="/projects" className="border-2 border-accent px-4 sm:px-5 py-1.5 sm:py-2 hover:bg-accent/20 transition-colors rounded-md font-medium text-sm sm:text-base">
              View All
            </Link>
          </Hover>
        </div>
        <ProjectList limit={3} />
      </motion.div>
    </>
  );
}

export default Home;