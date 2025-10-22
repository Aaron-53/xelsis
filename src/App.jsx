import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        {/* Full Page Background Pattern */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: "url('/images/bg-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Footer */}
        <footer className="relative  py-12">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(0, 255, 255, 0.1) 20px,
              rgba(0, 255, 255, 0.1) 40px
            )`,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="XELSIS Events"
                  className="h-24 md:h-32 w-auto object-contain"
                />{" "}
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left space-y-2">
                <p className="text-sm text-white">
                  © 2025 by Xelsis Live Events Management sole proprietorship
                  LLC
                </p>
                <p className="text-white">+971 50 6218392 | +971 50 9018392</p>
                <p className="text-white">info@xelsisevents.com</p>
                <p className="text-white text-sm">
                  Post Box No. 29346, AbuDhabi, UAE
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
