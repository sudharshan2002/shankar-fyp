import { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      onNavigate('home');
    } else {
      navigate('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-2xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <Brain className="w-4.5 h-4.5 text-background" />
            </div>
            <span className="font-bold text-[15px]">
              AI Guardrail
            </span>
          </button>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {['Demo', 'How It Works', 'Research', 'Architecture', 'API'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase().replace(/\s+/g, '-'))}
                className="px-3 lg:px-4 py-2 rounded-lg text-[13px] lg:text-[14px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-foreground hover:bg-muted transition-all"
              >
                Log in
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="btn-primary px-4 py-2 rounded-lg font-medium text-[13px]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}