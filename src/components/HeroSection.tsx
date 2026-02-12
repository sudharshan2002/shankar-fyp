import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface HeroSectionProps {
  onNavigateToDemo: () => void;
}

export function HeroSection({ onNavigateToDemo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background - Multiple layers for depth */}
      <div className="absolute inset-0 -z-10 bg-background">
        {/* Primary gradient orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.03, 0.05, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            transform: 'translate(30%, -40%)'
          }}
        />
        
        {/* Secondary gradient orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.02, 0.04, 0.02],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
            transform: 'translate(-20%, 40%)'
          }}
        />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Floating elements for motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.1, 0],
              y: [-100, -800],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute w-1 h-1 rounded-full bg-foreground"
            style={{
              left: `${10 + i * 15}%`,
              bottom: 0,
            }}
          />
        ))}
      </motion.div>

      {/* Content with parallax */}
      <motion.div 
        style={{ opacity, y }}
        className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-24 w-full"
      >
        <div className="max-w-5xl">
          {/* Small label with refined animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full bg-[var(--button-primary)]"
              />
              <span className="text-[11px] font-medium text-foreground/70 tracking-[0.15em] uppercase">
                AgenSentra Guardrail
              </span>
            </motion.div>
          </motion.div>

          {/* Large dominant headline with character stagger */}
          <div className="mb-10 md:mb-12 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[104px] font-bold tracking-[-0.045em] leading-[0.95]"
            >
              {["Secure Vision Models"].map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, y: 40, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.5 + lineIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {line}
                </motion.div>
              ))}
              {["From Hidden Prompts"].map((line, lineIndex) => (
                <motion.div
                  key={lineIndex + 1}
                  initial={{ opacity: 0, y: 40, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.6 + lineIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
                >
                  {line}
                </motion.div>
              ))}
            </motion.h1>
          </div>

          {/* Supporting sentence with smooth reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-14"
          >
            <p className="text-[17px] md:text-[20px] text-muted-foreground max-w-2xl font-normal leading-[1.6]">
              A multi-domain detection framework protecting open source Vision-Language Models (VLMs) from invisible steganographic embedding attacks
            </p>
          </motion.div>

          {/* Buttons with sophisticated hover states */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={onNavigateToDemo}
              className="group relative overflow-hidden px-8 py-4 rounded-xl font-medium text-[16px] w-full sm:w-auto"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-[var(--button-primary)]"
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: "100%" }
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <span className="relative text-white flex items-center justify-center gap-2">
                Upload Image
                <motion.span
                  variants={{
                    hover: { x: 3 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/40"
        >
          <div className="text-[11px] uppercase tracking-widest">Scroll</div>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-current to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
