import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would use an authentication provider
    console.log('Login attempt with:', { email, password });
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // In a real app, this would redirect to Google OAuth
    console.log('Google login attempt');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-background relative overflow-hidden">
      {/* Subtle background glow effect similar to Hero */}
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
            Welcome back
          </h1>
          <p className="text-[15px] text-muted-foreground text-center">
            Log in to continue your research
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <button 
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-border rounded-lg text-[14px] font-medium hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-[13px] font-medium text-foreground">
                  Password
                </label>
                <Link to="/forgot-password" className="text-[13px] text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary px-4 py-2.5 rounded-lg font-medium text-[14px] mt-2 group flex items-center justify-center gap-2"
            >
              Sign in
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-[14px] text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/signup" className="text-foreground font-medium hover:text-primary transition-colors">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
