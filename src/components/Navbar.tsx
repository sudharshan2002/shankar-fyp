import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      onNavigate('home');
    } else {
      navigate('/');
    }
    setMobileMenuOpen(false);
  };

  const navItems = ['Demo', 'How It Works', 'Research', 'Architecture', 'API'];

  const handleMobileNav = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-background/80 backdrop-blur-2xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-5">
          <div className="flex items-center justify-between relative z-[60]">
            {/* Left: Logo */}
            <button onClick={handleLogoClick} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity relative z-[60]">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <Brain className="w-4.5 h-4.5 text-background" />
              </div>
              <span className="font-bold text-[15px]">
                AI Guardrail
              </span>
            </button>

            {/* Center: Navigation (Desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
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
            <div className="flex items-center gap-2 md:gap-4 relative z-[60]">
              <ThemeToggle />
              
              <div className="hidden md:flex items-center gap-2">
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

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -mr-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6 pb-6 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMobileNav(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-left px-4 py-4 rounded-xl text-[16px] font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  {item}
                </button>
              ))}
              
              <div className="h-px bg-border/50 my-4" />
              
              <div className="flex flex-col gap-3 px-4">
                <button 
                  onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                  className="w-full py-3 rounded-xl text-[15px] font-medium text-foreground bg-muted/50 hover:bg-muted transition-colors"
                >
                  Log in
                </button>
                <button 
                  onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}
                  className="w-full btn-primary py-3 rounded-xl font-medium text-[15px]"
                >
                  Sign up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}