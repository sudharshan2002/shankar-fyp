import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

const codeExample = `curl -X POST https://api.aiguardrail.com/v1/detect \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@image.jpg"

{
  "status": "suspicious",
  "confidence": 87.3,
  "modules": {
    "spatial": "clear",
    "frequency": "anomaly",
    "neural": "suspicious"
  }
}`;

export function APISection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Split layout: Left explanation, Right code - Developer-grade */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 lg:gap-24 items-start">
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
            <p className="text-[16px] md:text-[17px] lg:text-[18px] text-muted-foreground leading-[1.75] mb-10 md:mb-12 lg:mb-16">
              Integrate AI Guardrail into your applications with our simple REST API. 
              Fast, secure, and reliable threat detection for production systems.
            </p>
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="text-[15px] md:text-[16px] font-medium mb-1.5 md:mb-2">Average Response</div>
                <div className="text-[15px] md:text-[16px] text-muted-foreground">99ms latency</div>
              </div>
              <div>
                <div className="text-[15px] md:text-[16px] font-medium mb-1.5 md:mb-2">Security</div>
                <div className="text-[15px] md:text-[16px] text-muted-foreground">Enterprise-grade encryption</div>
              </div>
              <div>
                <div className="text-[15px] md:text-[16px] font-medium mb-1.5 md:mb-2">Documentation</div>
                <div className="text-[15px] md:text-[16px] text-muted-foreground">
                  <a href="#" className="text-[var(--button-primary)] hover:underline transition-all duration-300">
                    View full API docs →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Code block - Subtle background contrast */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl md:rounded-3xl bg-muted/30 border border-border overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5 border-b border-border">
                <span className="text-[13px] md:text-[14px] text-muted-foreground font-medium">
                  Example Request
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-[13px] md:text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>

              {/* Code - Monospace with clean alignment */}
              <div className="p-6 md:p-8 overflow-x-auto">
                <pre className="text-[13px] md:text-[14px] font-mono text-foreground/80 leading-[1.9]">
                  {codeExample}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}