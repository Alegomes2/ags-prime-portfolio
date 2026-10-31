import { motion } from "framer-motion";

function Logo() {
  return <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-2xl font-bold text-transparent">AGS Prime Technology</motion.span>;
}

export default Logo;
