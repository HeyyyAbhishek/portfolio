import { motion } from "framer-motion";
import { useState } from "react";

// Function to get color for each technology
const getTechColor = (tech) => {
    // Use consistent colors from our theme instead of random colors
    return "bg-tech-bg text-tech-text border border-tech-border";
};

// Function to get status indicator style
const getStatusStyle = (status) => {
    const statusStyles = {
        "expert": {
            color: "text-success",
            icon: "●",
            tooltip: "Expert"
        },
        "proficient": {
            color: "text-info",
            icon: "●",
            tooltip: "Proficient"
        },
        "intermediate": {
            color: "text-warning",
            icon: "●",
            tooltip: "Intermediate"
        },
        "learning": {
            color: "text-accent-light",
            icon: "○",
            tooltip: "Learning"
        },
        "new": {
            color: "text-error",
            icon: "○",
            tooltip: "New"
        }
    };
    
    return statusStyles[status] || { color: "text-text-tertiary", icon: "○", tooltip: "Not specified" };
};

function Project({ title, description, technologies, image, link }) {
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const isPlaceholder = !link || link === "#";
    const [showTooltip, setShowTooltip] = useState(null);

    const handleClick = (e) => {
        // Prevent default behavior if it's just a placeholder link
        if (isPlaceholder) {
            e.preventDefault();
            setShowPlaceholder(true);
            setTimeout(() => setShowPlaceholder(false), 3000);
        }
    };

    return (
        <motion.div 
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-border bg-primary-light rounded-md overflow-hidden hover:border-accent shadow-card hover:shadow-custom transition-all duration-300"
        >
            {image && (
                <div className="overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 hover:scale-105" 
                        loading="lazy"
                    />
                </div>
            )}
            <div className="border-t border-border p-2 sm:p-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {technologies.map((tech, index) => {
                        const techName = typeof tech === 'string' ? tech : tech.name;
                        const techStatus = typeof tech === 'string' ? 'proficient' : (tech.status || 'proficient');
                        const { color, icon, tooltip } = getStatusStyle(techStatus);
                        
                        return (
                            <div key={index} className="relative inline-flex items-center">
                                <span 
                                    className={`${getTechColor(techName)} text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md font-medium flex items-center gap-1 sm:gap-1.5`}
                                    onMouseEnter={() => setShowTooltip(index)}
                                    onMouseLeave={() => setShowTooltip(null)}
                                >
                                    <span className={`${color} text-[10px] sm:text-xs`}>{icon}</span>
                                    {techName}
                                </span>
                                {showTooltip === index && (
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-secondary text-text text-[10px] sm:text-xs px-2 py-1 rounded whitespace-nowrap shadow-custom z-10">
                                        {tooltip}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-medium mb-1.5 sm:mb-2">{title}</h3>
                <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 line-height-relaxed">{description}</p>
                <motion.a 
                    href={link} 
                    target={isPlaceholder ? "" : "_blank"}
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className="inline-block border border-accent px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-accent/20 transition-colors rounded text-xs sm:text-sm"
                    whileTap={{ scale: 0.95 }}
                >
                    View Project
                </motion.a>
                {showPlaceholder && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-accent mt-2 text-xs sm:text-sm"
                    >
                        Project link coming soon!
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
}

// ProjectList component to display multiple projects
export function ProjectList({ limit, featured = false }) {
    const allProjects = [
        {
            title: "E-commerce Platform",
            description: "A full-featured online shopping experience with cart and checkout",
            technologies: [
                { name: "React", status: "proficient" },
                { name: "Node.js", status: "intermediate" },
                { name: "MongoDB", status: "learning" }
            ],
            image: "https://via.placeholder.com/400x200?text=E-commerce+Project",
            link: "#",
            featured: true
        },
        {
            title: "Task Management App",
            description: "Organize and manage your daily tasks efficiently",
            technologies: [
                { name: "React", status: "expert" },
                { name: "Firebase", status: "intermediate" },
                { name: "Tailwind", status: "proficient" }
            ],
            image: "https://via.placeholder.com/400x200?text=Task+Manager",
            link: "#",
            featured: true
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather information with forecasting",
            technologies: [
                { name: "JavaScript", status: "expert" },
                { name: "API", status: "proficient" },
                { name: "CSS", status: "proficient" }
            ],
            image: "https://via.placeholder.com/400x200?text=Weather+App",
            link: "#",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio showcasing my skills and projects",
            technologies: [
                { name: "React", status: "expert" },
                { name: "Framer Motion", status: "intermediate" },
                { name: "Tailwind", status: "expert" }
            ],
            image: "https://via.placeholder.com/400x200?text=Portfolio",
            link: "#",
            featured: false
        },
        {
            title: "Recipe App",
            description: "Find and save your favorite recipes",
            technologies: [
                { name: "React", status: "proficient" },
                { name: "Node.js", status: "learning" },
                { name: "MongoDB", status: "new" }
            ],
            image: "https://via.placeholder.com/400x200?text=Recipe+App",
            link: "#",
            featured: false
        },
        {
            title: "Movie Database",
            description: "Search and explore information about movies and TV shows",
            technologies: [
                { name: "React", status: "proficient" },
                { name: "API", status: "intermediate" },
                { name: "Styled Components", status: "learning" }
            ],
            image: "https://via.placeholder.com/400x200?text=Movie+Database",
            link: "#",
            featured: false
        }
    ];

    let projects = allProjects;
    
    // Filter by featured if specified
    if (featured) {
        projects = allProjects.filter(project => project.featured);
    }
    
    // Apply limit if specified
    if (limit) {
        projects = projects.slice(0, limit);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Project;