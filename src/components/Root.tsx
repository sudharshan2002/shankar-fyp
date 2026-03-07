import { Outlet, useLocation, useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/?section=" + section);
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Handle scrolling when returning to home with a section query param
    if (location.pathname === "/" && location.search) {
      const params = new URLSearchParams(location.search);
      const section = params.get("section");
      if (section) {
        setTimeout(() => handleNavigate(section), 100);
        // clean up URL silently
        window.history.replaceState({}, "", "/");
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      <div className="flex-1 w-full flex flex-col">
        <Outlet context={{ onNavigate: handleNavigate }} />
      </div>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && <Footer />}
    </div>
  );
}
