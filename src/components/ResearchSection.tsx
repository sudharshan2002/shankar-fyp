import { motion } from 'motion/react';

export function ResearchSection() {
  return (
    <section id="research" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Split layout: Left text, Right stats - Google AI style */}
        <div className="grid gap-16 md:gap-20 lg:gap-28 items-start">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}