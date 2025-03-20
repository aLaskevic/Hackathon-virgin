import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 }, // Start off-screen (right)
  animate: { opacity: 1, transition: { duration: 0.5 } }, // Slide in
  exit: { opacity: 0, transition: { duration: 0.5 } }, // Slide out (left)
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`page ${className}`}
    >
      {children}
    </motion.div>
  );
}
