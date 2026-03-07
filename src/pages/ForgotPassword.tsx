import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a password reset email
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-background relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[400px] relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-6 hover:scale-105 transition-transform">
            <Brain className="w-6 h-6 text-background" />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-2 text-center">
            Reset your password
          </h1>
          <p className="text-[15px] text-muted-foreground text-center px-4">
            {isSubmitted 
              ? "We've sent you an email with instructions." 
              : "Enter your email and we'll send you a reset link."}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[13px] font-medium text-foreground">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary px-4 py-2.5 rounded-lg font-medium text-[14px] mt-2 group flex items-center justify-center gap-2"
              >
                Send reset link
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-4"
            >
              <div className="w-12 h-12 rounded-full bg-status-safe-bg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-status-safe" />
              </div>
              <p className="text-[14px] text-center text-foreground mb-6 font-medium">
                Check your inbox at <span className="font-semibold">{email}</span>
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[13px] text-primary hover:underline"
              >
                Didn't receive the email? Click to resend.
              </button>
            </motion.div>
          )}
        </div>

        <Link 
          to="/login" 
          className="mt-6 flex items-center justify-center gap-2 text-[14px] text-muted-foreground hover:text-foreground font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to log in
        </Link>
      </motion.div>
    </div>
  );
}
