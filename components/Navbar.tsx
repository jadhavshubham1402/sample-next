import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Define the interface for navbar items
interface NavItem {
  href: string;
  label: string;
  isButton?: boolean; // Optional flag for button styling (e.g., Instant Call Back)
}

export const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#price", label: "Price" },
  { href: "/#site-floor-plan", label: "Site & Floor Plan" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#location", label: "Location" },
  { href: "/#virtual-site-visit", label: "Virtual Site Visit" },
  { href: "/#download-brochure", label: "Download Brochure" },
  { href: "/#pre-register", label: "Pre Register" },
  { href: "/#contact", label: "Instant Call Back", isButton: true },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-40">
          <Link href="/">
            <svg className="w-full h-auto" viewBox="0 0 200 50">
              <use href="/images/logo.svg#logo" />
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) =>
            item.isButton ? (
              <a
                key={index}
                href={item.href}
                className="text-horizon-gray hover:text-horizon-green transition-colors duration-300"
              >
                <button className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300">
                  {item.label} <span className="ml-2">+9124897039</span>
                </button>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="text-horizon-gray hover:text-horizon-green transition-colors duration-300 text-lg"
                scroll={false}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-horizon-gray focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          {navItems.map((item, index) =>
            item.isButton ? (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-horizon-gray hover:text-horizon-green transition-colors duration-300"
                onClick={toggleMenu}
              >
                <button className="bg-horizon-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-horizon-green-hover transition-colors duration-300 w-full text-left">
                  {item.label} <span className="ml-2">+9124897039</span>
                </button>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-horizon-gray hover:text-horizon-green transition-colors duration-300"
                onClick={toggleMenu}
                scroll={false}
              >
                {item.label}
              </Link>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
