import { motion } from 'motion/react';

export function APISection() {
  return (
    <section id="api" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Split layout: Left explanation, Right code - Developer-grade */}
        <div className="grid gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05] mb-6 md:mb-8 lg:mb-10">
              Developer API
            </h2>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-muted-foreground leading-[1.75]">
              The Developer API is planned and will be developed in the future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}