import { motion } from 'motion/react';

const pipeline = [
  { label: 'Image Input', description: 'Upload' },
  { label: 'Preprocessing', description: 'Normalize' },
  { label: 'Multi-layer Analysis', description: '3 modules' },
  { label: 'Final Prediction', description: 'Safe/Suspicious' },
];

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-surface-1/40">
      <div className="max-w-[1300px] mx-auto">
        {/* Title at top left - Technical feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05] mb-4 md:mb-6">
            System Architecture
          </h2>
          <p className="text-[16px] md:text-[18px] text-muted-foreground max-w-2xl">
            End-to-end detection pipeline designed for speed and reliability
          </p>
        </motion.div>

        {/* Wide clean diagram - Minimal with thin lines and lots of breathing space */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Pipeline stages - Horizontal flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {pipeline.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Stage */}
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border flex items-center justify-center bg-background"
                  >
                    <span className="text-[15px] md:text-[16px] font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-[17px] md:text-[18px] lg:text-[19px] font-semibold mb-1.5 md:mb-2">
                      {stage.label}
                    </h4>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector - Thin line */}
                {index < pipeline.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden md:block absolute top-6 md:top-7 left-full w-8 lg:w-12 h-[1px] bg-border"
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}