import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Hide scrollbar when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" overflow-hidden">
      <div className="container ">
        <div className="flex items-center justify-between pt-3 w-screen mx-auto px-10">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={logo} alt="Xelsis Logo" className="h-20" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <div className="hidden max-sm:block">
              {isOpen ? (
                <div className="text-xl font-bold">✕</div>
              ) : (
                <div className="text-xl font-bold">☰</div>
              )}
            </div>
            <div className="hidden sm:flex bg-[#afbec5] w-[60px] h-[20px] rounded-full justify-center items-center text-black px-16 py-4">
              MENU
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-[#2a2a2a] z-50 flex flex-col">
            {/* Close button at top-right */}
            <div className="absolute top-8 right-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 focus:outline-none transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Centered menu items */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col gap-1 text-center max-w-4xl w-full px-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-white hover:text-gray-300 transition-colors py-6 text-5xl font-light  border-b-2 border-gray-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
