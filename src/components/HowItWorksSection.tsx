import { motion } from 'motion/react';

const features = [
  {
    number: '01',
    title: 'Spatial Analysis',
    description: 'Pixel-level examination detecting hidden patterns and anomalies through advanced computer vision techniques. Identifies manipulation artifacts invisible to human perception.',
  },
  {
    number: '02',
    title: 'Frequency Domain Detection',
    description: 'FFT-based analysis identifying steganographic techniques and frequency-space manipulations. Detects adversarial perturbations embedded in transform coefficients.',
  },
  {
    number: '03',
    title: 'Neural Classification',
    description: 'Deep learning classifier trained on extensive adversarial datasets. Provides robust threat identification through learned pattern recognition.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 bg-surface-1/40">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05] mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-[16px] md:text-[18px] text-muted-foreground max-w-2xl">
            Multi-domain analysis working together to identify threats
          </p>
        </motion.div>

        {/* Three large horizontal rows - Tighter mobile spacing */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border pt-8 md:pt-10 lg:pt-12"
            >
              <div className="grid lg:grid-cols-[140px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
                {/* Number - Large and subtle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.2 }}
                  className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-muted-foreground/20 tracking-tight"
                >
                  {feature.number}
                </motion.div>

                {/* Content */}
                <div className="max-w-3xl">
                  <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold mb-4 md:mb-5 lg:mb-6 tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] md:text-[17px] lg:text-[18px] text-muted-foreground leading-[1.75]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}