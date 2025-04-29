import { motion } from "framer-motion";

function Hover({ children, className, scale = 1.05, ...props }) {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default Hover;
