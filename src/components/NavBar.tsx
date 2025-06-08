
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Find active section
      const sections = navigation.map((item) => {
        const element = document.querySelector(item.href);
        if (!element) return { id: item.name.toLowerCase(), top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id: item.name.toLowerCase(),
          top: rect.top + scrollPosition,
          bottom: rect.bottom + scrollPosition,
        };
      });

      const viewportHeight = window.innerHeight;
      const currentSection = sections.find((section) => {
        return (
          scrollPosition >= section.top - viewportHeight / 2 &&
          scrollPosition < section.bottom - viewportHeight / 3
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          <Link to="/">CJ</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === item.name.toLowerCase()
                  ? "text-primary"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4 flex items-center space-x-2">
            <ThemeSwitch />
            <Button variant="outline" size="sm" className="ml-2 flex items-center" ></Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 flex items-center"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Chanuga CV.pdf';
                link.download = 'Chanuga_Jayarathne_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}              
            >
              <Download className="h-4 w-4 mr-1" />
              CV
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeSwitch />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                activeSection === item.name.toLowerCase()
                  ? "text-primary"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
              <Download className="h-4 w-4 mr-1" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
