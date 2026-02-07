import { useState, useRef } from 'react';
import { Upload, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Progress } from './ui/progress';

interface PredictionResult {
  status: 'safe' | 'suspicious';
  confidence: number;
  explanation: string;
}

export function DemoSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      analyzeImage();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const isSafe = Math.random() > 0.3;
      setResult({
        status: isSafe ? 'safe' : 'suspicious',
        confidence: isSafe ? 95 + Math.random() * 4 : 70 + Math.random() * 15,
        explanation: isSafe
          ? 'No adversarial patterns detected across all detection modules.'
          : 'Potential adversarial perturbations identified in frequency analysis.',
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header - Reduced top spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.05] mb-4">
            Try Live Detection
          </h2>
          <p className="text-[16px] md:text-[18px] text-muted-foreground max-w-2xl">
            Upload an image to analyze in real-time using our multi-layer detection system
          </p>
        </motion.div>

        {/* Wide centered upload area - Accessible and immediate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Upload Zone - Shorter and wider for better visibility */}
          <motion.div
            animate={{
              borderColor: isDragging ? 'var(--button-primary)' : 'var(--border)',
              backgroundColor: isDragging ? 'rgba(37, 99, 235, 0.03)' : 'transparent',
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl md:rounded-3xl border-2 border-dashed"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="p-12 md:p-16 lg:p-20 text-center">
              {uploadedImage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[14px] md:text-[15px] text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                  >
                    Upload different image
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6 md:space-y-8"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-muted/60 flex items-center justify-center"
                  >
                    <Upload className="w-7 h-7 md:w-9 md:h-9 text-muted-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-[18px] md:text-[20px] font-medium mb-2 md:mb-3">
                      Drop an image here
                    </p>
                    <p className="text-[15px] md:text-[16px] text-muted-foreground">
                      or{' '}
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[var(--button-primary)] hover:underline font-medium transition-all duration-300"
                      >
                        browse files
                      </button>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </motion.div>

          {/* Results appear inline below */}
          <AnimatePresence mode="wait">
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 md:mt-12 text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-[var(--button-primary)] mx-auto mb-4 md:mb-6" />
                </motion.div>
                <p className="text-[15px] md:text-[16px] text-muted-foreground">Analyzing image...</p>
              </motion.div>
            )}

            {result && !isAnalyzing && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 md:mt-16 space-y-8 md:space-y-10"
              >
                {/* Status */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 md:gap-5"
                >
                  {result.status === 'safe' ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[var(--status-safe)] flex-shrink-0" />
                      <div>
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[var(--status-safe)]">
                          Safe
                        </h3>
                        <p className="text-[14px] md:text-[16px] text-muted-foreground">
                          No threats detected
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-[var(--status-suspicious)] flex-shrink-0" />
                      <div>
                        <h3 className="text-[28px] md:text-[32px] font-semibold text-[var(--status-suspicious)]">
                          Suspicious
                        </h3>
                        <p className="text-[14px] md:text-[16px] text-muted-foreground">
                          Review required
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Confidence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-lg space-y-3 md:space-y-4"
                >
                  <div className="flex items-center justify-between text-[15px] md:text-[16px]">
                    <span className="font-medium">Confidence</span>
                    <span className="text-muted-foreground">
                      {result.confidence.toFixed(1)}%
                    </span>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'left' }}
                  >
                    <Progress value={result.confidence} className="h-2" />
                  </motion.div>
                </motion.div>

                {/* Explanation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15px] md:text-[17px] text-muted-foreground max-w-2xl leading-[1.7]"
                >
                  {result.explanation}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
