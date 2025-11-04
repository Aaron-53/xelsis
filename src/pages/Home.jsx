import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  organizationSchema,
  websiteSchema,
  eventSchema,
} from "../utils/structuredData";
import image21 from "../assets/gallery/image21.jpg";
import home from "../assets/homeimages/home1.jpg";
import icon1 from "../assets/homeimages/1.svg";
import icon2 from "../assets/homeimages/2.svg";
import icon3 from "../assets/homeimages/3.svg";
import icon4 from "../assets/homeimages/4.svg";
import icon5 from "../assets/homeimages/5.svg";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroImageRef = useRef(null);
  const mobileHeroImageRef = useRef(null);
  const homeImageRef = useRef(null);

  // State to track if home image is in viewport
  const [isHomeImageVisible, setIsHomeImageVisible] = useState(false);

  // Set up Intersection Observer for home image
  useEffect(() => {
    if (!homeImageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHomeImageVisible(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(homeImageRef.current);

    return () => {
      if (homeImageRef.current) {
        observer.unobserve(homeImageRef.current);
      }
    };
  }, []);

  // Handle scroll event to create zoom-out effect
  useEffect(() => {
    let ticking = false;
    let lastKnownScrollPosition = 0;
    let animationFrameId = null;

    const updateImagesScale = () => {
      // Apply zoom transformation to the hero images
      const maxScroll = window.innerHeight;
      const scrollPercentage = Math.min(lastKnownScrollPosition / maxScroll, 1);
      const scaleValue = 1.15 - scrollPercentage * 0.15;

      // Desktop hero image
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `scale(${scaleValue})`;
      }

      // Mobile hero image
      if (mobileHeroImageRef.current) {
        mobileHeroImageRef.current.style.transform = `scale(${scaleValue})`;
      }

      // Home/team image - calculate a separate scale based on its position in the viewport
      if (homeImageRef.current && isHomeImageVisible) {
        const homeImageRect = homeImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the image is in view and centered in the viewport
        // This creates a more natural zoom effect as the image enters and leaves the viewport
        const visibilityRatio =
          1 -
          Math.min(
            Math.abs(homeImageRect.top) / windowHeight,
            Math.abs(homeImageRect.bottom - windowHeight) / windowHeight,
            1
          );

        // Create a smooth transition from 1.15 to 1.0 scale
        const homeScaleValue = 1 + 0.15 * visibilityRatio;
        homeImageRef.current.style.transform = `scale(${homeScaleValue})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;
      setScrollPosition(lastKnownScrollPosition);

      if (!ticking) {
        // Use requestAnimationFrame for smoother performance
        animationFrameId = window.requestAnimationFrame(() => {
          updateImagesScale();
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Set initial styles for both images
    if (heroImageRef.current) {
      heroImageRef.current.style.transform = "scale(1.15)";
      heroImageRef.current.style.transition = "transform 0.3s ease-out";
      heroImageRef.current.style.transformOrigin = "center center";
    }

    if (mobileHeroImageRef.current) {
      mobileHeroImageRef.current.style.transform = "scale(1.15)";
      mobileHeroImageRef.current.style.transition = "transform 0.3s ease-out";
      mobileHeroImageRef.current.style.transformOrigin = "center center";
    }

    if (homeImageRef.current) {
      homeImageRef.current.style.transform = "scale(1.15)";
      homeImageRef.current.style.transition = "transform 0.3s ease-out";
      homeImageRef.current.style.transformOrigin = "center center";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <SEO
        title="Xelsis Events Management - Premier Event Planning in UAE"
        description="With over two decades of experience and 250+ successful events, Xelsis Events Management is your trusted partner for extraordinary corporate, cultural, and live entertainment experiences across the UAE."
        keywords="event management UAE, corporate events Dubai, live entertainment, cultural events, sports events, exhibitions, event planning Dubai, Abu Dhabi events, Xelsis Events"
        url="/"
        structuredData={[
          organizationSchema,
          websiteSchema,
          eventSchema({
            name: "Xelsis Events 2025",
            description: "Premier event management services by Xelsis Events",
            startDate: "2025-12-01T19:00:00+04:00",
            locationName: "UAE",
            city: "Dubai",
          }),
        ]}
      />
      {/* Hero Section */}
      <section className="w-full h-screen relative -mt-16 pt-16">
        {/* Right side image that extends to the very top with zoom effect */}
        <div className="absolute -top-16 right-0 w-1/2 h-[calc(100%+4rem)] z-10 hidden lg:block overflow-hidden">
          <img
            ref={heroImageRef}
            src={image21}
            alt="Xelsis Events Performance"
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
          />
        </div>
        {/* Full-width container with proper height */}
        <div className="grid lg:grid-cols-2 gap-0 items-center h-full">
          {/* Left Column - Text Content */}
          <div
            className="space-y-6 text-center px-8 lg:px-16"
            data-aos="fade-up"
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-header">We Bring</span>
              <br />
              <span className="gradient-header">Your Vision</span>
              <br />
              <span className="gradient-header">to Reality</span>
            </h1>

            <p className="text-white text-base leading-relaxed normal-benzin max-w-xl mx-auto">
              With over two decades of hands-on expertise and a deep
              understanding of the events landscape, Xelsis Events Management is
              your trusted partner in crafting seamless, impactful experiences
              across the UAE.
            </p>

            <div className="flex justify-center">
              <Link to="/contact">
                <button className="px-8 py-3 bg-red-600 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 custom-home-btn">
                  Create Your Next Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 flex items-center justify-center">
        <div className="w-full h-px bg-cyan-400 absolute top-0"></div>

        {/* Content */}
        <div
          className="relative z-20 container mx-auto px-6 lg:px-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-header">Our Story</span>
          </h2>

          <p className="text-white text-lg leading-relaxed normal-benzin max-w-4xl mx-auto mb-8">
            Backed by two decades of experience and 250+ successful events,
            Xelsis Events Management is your partner for extraordinary
            occasions. We specialize in corporate, cultural, and live
            entertainment experiences that leave lasting impressions across the
            UAE.
          </p>

          <Link to="/about">
            <button className="px-8 py-3 bg-red-600 text-white rounded-full text-lg font-semibold transition-all transform hover:scale-105 custom-home-btn">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Team/Event Image Section */}
      <section className="relative py-2">
        <div className="w-full h-px bg-cyan-400"></div>
        <div
          className="flex justify-center items-center overflow-hidden"
          style={{ maxHeight: "85vh" }}
        >
          <img
            ref={homeImageRef}
            src={home}
            alt="Xelsis Events Team"
            className="object-cover w-full h-full"
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="w-full h-px bg-cyan-400"></div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 z-10 mt-4 overflow-hidden">
        {/* Diagonal Lines Background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#00ffff10_1px,transparent_1px)]"
          style={{ backgroundSize: "24px 24px" }}
        ></div>

        {/* Section title in centered container */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-6xl lg:text-7xl font-bold">
            <span className="gradient-header">Services</span>
          </h2>
        </div>

        {/* Full-width grid without container - using negative margins to extend beyond viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-cyan-400/30 w-screen -ml-[calc(50vw-50%)]">
          {/* Corporate & Professional Events */}
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l border-t border-cyan-400/30 slide-in">
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
            >
              <img
                src={icon1}
                alt="Corporate icon"
                className="w-10 h-10 sm:w-12 sm:h-12 filter shrink-0"
                aria-hidden="true"
              />

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide push-up">
                <span className="gradient-header-cyan">
                  Corporate &<br />
                  Professional
                  <br />
                  Events
                </span>
              </h3>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l lg:border-l-0 border-t lg:border-r border-cyan-400/30 slide-in-right">
            <p
              className="text-white text-sm sm:text-base leading-relaxed normal-benzin push-up text-left"
              data-aos="fade-up"
            >
              Crafting corporate events that reflect your brand's
              professionalism. From high-stakes conferences to engaging
              team-building retreats, we manage every detail.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 h-px bg-cyan-400/30"></div>
          {/* Live Entertainment */}
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l border-t border-cyan-400/30 slide-in">
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
            >
              <img
                src={icon2}
                alt="Live icon"
                className="w-10 h-10 sm:w-12 sm:h-12 filter shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide push-up">
                <span className="gradient-header-cyan">
                  Live Entertainment &<br />
                  Cultural Experiences
                </span>
              </h3>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l lg:border-l-0 border-t lg:border-r border-cyan-400/30 slide-in-right">
            <p
              className="text-white text-sm sm:text-base leading-relaxed normal-benzin push-up text-left"
              data-aos="fade-up"
            >
              Creating unforgettable live entertainment and cultural experiences
              that captivate your audience. We handle all aspects of concerts,
              festivals, and shows to deliver a truly magical and memorable
              event.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 h-0.5 bg-cyan-400/30"></div>

          {/* Bespoke & Custom Creations */}
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l border-t border-cyan-400/30">
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
            >
              <img
                src={icon3}
                alt="Bespoke icon"
                className="w-10 h-10 sm:w-12 sm:h-12 filter shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide push-up">
                <span className="gradient-header-cyan">
                  Bespoke &<br />
                  Custom Creations
                </span>
              </h3>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l lg:border-l-0 border-t lg:border-r border-cyan-400/30">
            <p
              className="text-white text-sm sm:text-base leading-relaxed normal-benzin push-up text-left"
              data-aos="fade-up"
            >
              Designing and executing unique, one-of-a-kind events tailored
              specifically to your vision. Our team works closely with you to
              bring your dream occasion to life with meticulous attention to
              detail.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 h-0.5 bg-cyan-400/30"></div>

          {/* Exhibitions */}
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l border-t border-cyan-400/30">
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
            >
              <img
                src={icon4}
                alt="Exhibitions icon"
                className="w-10 h-10 sm:w-12 sm:h-12 filter shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide push-up">
                <span className="gradient-header-cyan">Exhibitions</span>
              </h3>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l lg:border-l-0 border-t lg:border-r border-cyan-400/30">
            <p
              className="text-white text-sm sm:text-base leading-relaxed normal-benzin push-up text-left"
              data-aos="fade-up"
            >
              Managing and designing dynamic exhibitions that effectively
              showcase products and ideas. We provide comprehensive services
              from booth design to full-scale logistics, ensuring your display
              makes a lasting impression.
            </p>
          </div>

          {/* Sports Events */}
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l border-t border-b border-cyan-400/30">
            <div
              className="flex items-center justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
            >
              <img
                src={icon5}
                alt="Sports icon"
                className="w-10 h-10 sm:w-12 sm:h-12 filter shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-wide push-up">
                <span className="gradient-header-cyan">Sports Events</span>
              </h3>
            </div>
          </div>
          <div className="px-6 sm:px-10 lg:px-16 lg:px-24 py-8 sm:py-10 lg:py-12 border-l lg:border-l-0 border-t lg:border-r border-b border-cyan-400/30">
            <p
              className="text-white text-sm sm:text-base leading-relaxed normal-benzin push-up text-left"
              data-aos="fade-up"
            >
              Handling the intricate details of sporting events, from small
              local tournaments to major competitions. We focus on creating a
              well-organized and exhilarating experience for both athletes and
              spectators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
