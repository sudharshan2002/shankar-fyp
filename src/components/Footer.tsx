import { Brain, Github, BookOpen, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
        {/* Minimal footer - Wide and spacious, single row layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12 lg:gap-16"
        >
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <Brain className="w-4.5 h-4.5 text-background" />
            </div>
            <span className="font-bold text-[16px]">AgenSentra Guardrail</span>
          </div>

          {/* Center: Links - Balanced spacing */}
          <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 text-[14px] md:text-[15px] text-muted-foreground">
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#demo"
              className="hover:text-foreground transition-colors duration-300"
            >
              Demo
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#how-it-works"
              className="hover:text-foreground transition-colors duration-300"
            >
              How It Works
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#research"
              className="hover:text-foreground transition-colors duration-300"
            >
              Research
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#architecture"
              className="hover:text-foreground transition-colors duration-300"
            >
              Architecture
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#api"
              className="hover:text-foreground transition-colors duration-300"
            >
              API
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Documentation
            </motion.a>
          </div>

          {/* Right: Social - Smooth hover effects */}
          <div className="flex gap-3">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              href="#"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              href="#"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300"
              aria-label="Documentation"
            >
              <BookOpen className="w-4.5 h-4.5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              href="#"
              className="w-10 h-10 rounded-xl bg-muted hover:bg-muted-foreground/10 flex items-center justify-center transition-colors duration-300"
              aria-label="Contact"
            >
              <Mail className="w-4.5 h-4.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom line - Responsive spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-12 lg:mt-16 pt-8 md:pt-10 lg:pt-12 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[13px] md:text-[14px] text-muted-foreground">
            <p>© 2026 AgenSentra Guardrail. Research-driven security.</p>
            <div className="flex gap-6 md:gap-8">
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="#"
                className="hover:text-foreground transition-colors duration-300"
              >
                Privacy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                href="#"
                className="hover:text-foreground transition-colors duration-300"
              >
                Terms
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}