import { motion } from 'motion/react';

const stats = [
  {
    label: 'Detection Accuracy',
    value: '96.8%',
    description: 'Across adversarial datasets',
  },
  {
    label: 'Average Latency',
    value: '99ms',
    description: 'Real-time performance',
  },
  {
    label: 'False Positive Rate',
    value: '2.1%',
    description: 'Industry-leading precision',
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Split layout: Left text, Right stats - Google AI style */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 md:gap-20 lg:gap-28 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05] mb-6 md:mb-8 lg:mb-10">
              Research &<br />Performance
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-[16px] md:text-[17px] lg:text-[18px] text-muted-foreground leading-[1.75]">
                Built on cutting-edge research in adversarial machine learning. Our multi-layer 
                approach combines spatial analysis, frequency domain detection, and deep neural 
                networks to identify hidden threats with unprecedented accuracy.
              </p>
              <p className="text-[16px] md:text-[17px] lg:text-[18px] text-muted-foreground leading-[1.75]">
                Evaluated on CIFAR-10 adversarial dataset, ImageNet perturbations, and custom 
                security test suite containing 50,000+ adversarial samples.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats - Stacked vertically, subtle spacing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 md:space-y-16 lg:space-y-20 lg:pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-2 border-border pl-6 md:pl-8 lg:pl-10"
              >
                <div className="text-[14px] md:text-[15px] text-muted-foreground mb-3 md:mb-4 tracking-wide">
                  {stat.label}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-none mb-3 md:mb-4"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[15px] md:text-[16px] text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}