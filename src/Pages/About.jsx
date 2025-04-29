import { motion } from "framer-motion";
import Quote from "../Components/Quote";
import Hover from "../Components/Hover";
import { Link } from "react-router-dom";

function About() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    Tools: ["Git", "GitHub", "VS Code", "Docker", "Figma", "AWS"],
  };

  // Map skill names to accent colors for hover effects
  const skillColors = {
    JavaScript: "accent",
    TypeScript: "info",
    React: "info",
    "Next.js": "accent-dark",
    Python: "success", 
    Docker: "accent-light",
    Figma: "warning",
    CSS: "info",
    HTML: "error",
    Git: "error",
    AWS: "warning",
    // Default color for other skills will be accent
  };

  // Get color for a specific skill, default to accent if not found
  const getSkillColor = (skill) => skillColors[skill] || "accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-[92%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto"
    >
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5">
          <span className="text-accent">#</span>about-me
        </h1>
        <p className="text-text-secondary text-sm sm:text-lg max-w-3xl">
          Learn more about me, my background, and what drives me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Journey</h2>
          <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
            I'm a self-taught full-stack developer with a passion for building clean, efficient, and user-friendly web applications. My coding journey began several years ago when I decided to transition from my previous career to pursue my passion for technology.
          </p>
          <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
            Through countless hours of study, practice, and real-world projects, I've built a strong foundation in both front-end and back-end technologies. I enjoy solving complex problems and continuously expanding my knowledge in this ever-evolving field.
          </p>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <div className="border-2 border-accent rounded-md p-4 sm:p-6 bg-primary-light relative w-full max-w-[320px] shadow-card">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 absolute -top-2 -left-2 -z-10 rounded-md"></div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
              <span className="text-accent">{"<"}</span>
              About
              <span className="text-accent">{"/>"}</span>
            </h2>
            <img
              src="https://via.placeholder.com/400x300?text=Profile+Image"
              alt="Profile"
              className="w-full h-auto mb-4 border border-gray-700 rounded-md shadow-custom"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12 sm:mb-20"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative inline-block">
          <span className="text-accent">#</span>skills
          <div className="absolute top-1/2 h-[2px] bg-accent hidden sm:block w-[90px] sm:w-[150px] ml-[70px] sm:ml-[90px]"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="border-2 border-border rounded-md p-4 sm:p-6 bg-primary-light shadow-card hover:border-accent transition-colors">
              <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-bold">{category}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillList.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-tech-bg border border-tech-border rounded-md text-xs sm:text-sm transition-all duration-300 cursor-default"
                    whileHover={{ 
                      backgroundColor: `var(--color-${getSkillColor(skill)})`, 
                      color: "#FFFFFF", 
                      scale: 1.05,
                      borderColor: "transparent" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center w-full md:w-[80%] mx-auto mb-12 sm:mb-20 bg-primary-light p-4 sm:p-8 rounded-lg shadow-card"
      >
        <Quote
          quote="The most disastrous thing that you can ever learn is your first programming language."
          author="Alan Kay"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mb-8 sm:mb-10"
      >
        <p className="text-text-secondary text-sm sm:text-lg mb-5 sm:mb-8">
          Interested in working together? Feel free to reach out!
        </p>
        <Hover>
          <Link
            to="/contact"
            className="inline-block text-sm sm:text-base border-2 border-accent px-6 sm:px-8 py-2 sm:py-3 hover:bg-accent/20 transition-colors rounded-md font-medium"
          >
            Contact Me
          </Link>
        </Hover>
      </motion.div>
    </motion.div>
  );
}

export default About;
