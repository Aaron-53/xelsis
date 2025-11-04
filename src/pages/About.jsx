import { useEffect, useRef } from "react";
import SEO from "../components/SEO";
import { breadcrumbSchema, serviceSchema } from "../utils/structuredData";
import aboutUsImage from "../assets/about_us.jpg";
import founderImage from "../assets/founder.png";

const AboutUs = () => {
  const aboutUsImageRef = useRef(null);

  useEffect(() => {
    const zoomSpeed = 0.0002; // smaller = slower zoom-out; try 0.0003–0.001 range
    const maxZoomOut = 0.85; // how far it can zoom out (scale limit)
    const maxZoomIn = 1.3; // initial zoom-in level

    const handleScroll = () => {
      if (!aboutUsImageRef.current) return;

      const scrollY = window.scrollY;
      // Calculate scale inversely to scroll position
      let scale = maxZoomIn - scrollY * zoomSpeed;
      scale = Math.max(maxZoomOut, Math.min(maxZoomIn, scale)); // clamp within range

      aboutUsImageRef.current.style.transform = `scale(${scale})`;
    };

    // Initialize
    const img = aboutUsImageRef.current;
    if (img) {
      img.style.transition = "transform 0.2s ease-out";
      img.style.transformOrigin = "center center";
      img.style.willChange = "transform";
      img.style.transform = `scale(${maxZoomIn})`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <SEO 
        title="About Xelsis Events - Leading Event Management Company in UAE"
        description="Discover Xelsis Events Management, UAE's premier event planning company with over 20 years of experience, 250+ successful events, and expertise in corporate, cultural, and live entertainment events."
        keywords="about Xelsis Events, event management company UAE, corporate events Dubai, event planning services, UAE event management, Dubai event planners"
        url="/about"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' }
          ]),
          serviceSchema
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-24 pb-8">
        <div className="absolute bg-transparent inset-0" />
        <div
          className="container relative z-10 bg-transparent text-left px-6 md:px-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="gradient-header block sm:ml-6 md:ml-10">
              Elevate Your Event
            </span>
          </h1>
        </div>
      </section>

      {/* The Xelsis Journey Section with Scroll Zoom */}
      <section className="grid md:grid-cols-2 gap-0 border-2 border-primary border-[#65fffc]">
        <div className="relative overflow-hidden">
          <img
            ref={aboutUsImageRef}
            src={aboutUsImage}
            alt="Xelsis Team"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex flex-col justify-center px-8 md:px-16 py-16">
          <div
            className="relative z-10 flex justify-center flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-4xl text-center md:text-5xl font-bold mb-8 normal-jockey1 text-[#65fffc]">
              The Xelsis Journey
            </h2>
            <p className="text-xl w-8/12 text-pretty text-center mb-6 leading-relaxed normal-benzin">
              Xelsis Events Management was born from the vision of Mathews P
              John, who officially launched the company in 2021 after more than
              20 years of experience in the UAE's events landscape.
            </p>
            <p className="text-xl w-8/12 text-pretty text-center leading-relaxed normal-benzin">
              What began as a solo journey has grown into a full-service event
              management partner based in Abu Dhabi. Our foundation is built on
              passion, creativity, and commitment — values that drive us to
              craft seamless, impactful experiences across the UAE. Even as
              we've grown, we remain proud of delivering the personalized care
              and attention that only boutique-level service can provide.
            </p>
          </div>
        </div>
      </section>

      {/* From Passion to Profession Section */}
      <section className="relative border-b-2 border-[#65fffc] flex flex-col md:flex-row z-10">
        <div
          className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-header">From Passion to Profession</span>
          </h2>
          <blockquote className="text-lg normal-benzin md:text-xl leading-relaxed italic mb-8">
            "For as long as I can remember, I've been drawn to the magic of
            bringing people together. My first love was music and songwriting —
            creating moments that could move people, connect them, and leave a
            lasting memory. Over time, that same passion evolved into a love for
            events. I realized that events are just like music: they have
            rhythm, energy, and the power to create unforgettable experiences.
            <br />
            <br />
            Xelsis is my way of turning that passion into something bigger. What
            started as a one-man mission has grown into a team that shares the
            same vision — to make every event not just organized, but
            meaningful, seamless, and inspiring."
          </blockquote>
          <p className="text-right text-xl font-semibold normal-benzin">
            — Mathews P John
          </p>
        </div>

        <div className="relative w-full md:w-1/2 flex items-end justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={founderImage}
            alt="Mathews P John - Founder"
            className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[700px] h-auto object-contain"
          />
        </div>
      </section>
     {/* Our Vision Section */}
      <section className=" border-t-2 py-20 border-b-2 border-[#65fffc] grid md:grid-cols-3 items-center justify-center gap-12 px-20">
        <div className="md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold" data-aos="fade-up"
            data-aos-duration="2000">
            <span className="gradient-header text-8xl">Our Vision</span>
          </h2>
        </div>
        <div className="md:col-span-2" data-aos="fade-up"
            data-aos-duration="2000">
          <p className="text-lg text-pretty normal-benzin text-center md:text-xl leading-relaxed italic">
            Xelsis envisions a future where every event we manage reflects our
            commitment to understanding and exceeding client expectations. We
            aim to set the standard for people-focused events in the UAE and
            beyond delivering seamless, memorable experiences that build lasting
            relationships and create moments of joy for clients and their guests
            alike. As we grow regionally and internationally, our core promise
            remains the same: personal attention, adaptability, and a dedication
            to turning every client's vision into reality.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="relative pt-20 border-t-2 border-b-2 border-[#65fffc]">
        <div className=" relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16" data-aos="fade-up"
            data-aos-duration="2000">
            <span className="gradient-header">What Sets Us Apart</span>
          </h2>

          <div className="space-y-0">
            {/* Top row - 3 boxes */}
            <div className="grid md:grid-cols-3">
              <div className="backdrop-blur-sm p-8 flex justify-center items-center flex-col px-20 py-30 border-2 border-[#65fffc]">
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  20+ Years of Experience
                </h3>
                <p className="text-muted-foreground text-center normal-benzin" data-aos="fade-up"
            data-aos-duration="2000">
                  From freelance events to sophisticated large-scale productions
                </p>
              </div>

              <div className="backdrop-blur-sm p-8 flex justify-center items-center flex-col px-20 py-30 border-2 border-[#65fffc]">
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Personalized Approach with Global Standards
                </h3>
                <p className="text-muted-foreground normal-benzin text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Boutique care, with an eye for industry-leading practices.
                </p>
              </div>

              <div className="backdrop-blur-sm p-8 flex justify-center items-center flex-col px-20 py-30 border-2 border-[#65fffc]">
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  End-to-End Solutions
                </h3>
                <p className="text-muted-foreground normal-benzin text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  From conceptual design and planning to execution and wrap-up.
                </p>
              </div>
            </div>

            {/* Bottom row - 2 boxes expanded */}
            <div className="grid md:grid-cols-2">
              <div className="backdrop-blur-sm p-8 flex justify-center items-center flex-col px-20 py-30 border-2 border-[#65fffc]">
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Strong Vendor & Venue Network
                </h3>
                <p className="text-muted-foreground normal-benzin text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Trusted partnerships across the region for seamless delivery
                </p>
              </div>

              <div className="backdrop-blur-sm p-8 flex justify-center items-center flex-col px-20 py-30 border-2 border-[#65fffc]">
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Creative, Flexible, and Reliable
                </h3>
                <p className="text-muted-foreground normal-benzin text-center" data-aos="fade-up"
            data-aos-duration="2000">
                  Every project is custom-designed — and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;