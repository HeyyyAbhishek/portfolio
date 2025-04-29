import { motion } from "framer-motion";
import { ProjectList } from "../Components/Project";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto px-1 sm:px-0"
    >
      <div className="mb-10 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5">
          <span className="text-accent">#</span>projects
        </h1>
        <p className="text-text-secondary max-w-2xl text-sm sm:text-lg">
          A collection of my work showcasing my skills and experience. Each project is a piece of my journey as a developer.
        </p>
      </div>

      <div className="mb-12 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative inline-block">
          <span className="text-accent">#</span>featured-projects
          <div className="absolute top-1/2 h-[2px] bg-accent hidden sm:block w-[100px] sm:w-[150px] ml-[150px] sm:ml-[200px]"></div>
        </h2>
        <ProjectList featured={true} />
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative inline-block">
          <span className="text-accent">#</span>all-projects
          <div className="absolute top-1/2 h-[2px] bg-accent hidden sm:block w-[100px] sm:w-[150px] ml-[100px] sm:ml-[150px]"></div>
        </h2>
        <ProjectList />
      </div>
    </motion.div>
  );
}

export default Projects;
