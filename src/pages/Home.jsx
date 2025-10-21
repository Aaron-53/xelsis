import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import image21 from "../assets/gallery/image21.jpg";
import home from "../assets/homeimages/home1.jpg";
import icon1 from "../assets/homeimages/1.svg";
import icon2 from "../assets/homeimages/2.svg";
import icon3 from "../assets/homeimages/3.svg";
import icon4 from "../assets/homeimages/4.svg";
import icon5 from "../assets/homeimages/5.svg";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        

        <div className="container mx-auto px-6 lg:px-12">
          

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight">
                <span className="gradient-header">We Bring</span>
                <br />
                <span className="gradient-header">Your Vision</span>
                <br />
                <span className="gradient-header">to Reality</span>
              </h1>

              <p className="text-white text-lg leading-relaxed normal-benzin max-w-xl">
                With over two decades of hands-on expertise and a deep understanding of the events landscape, Xelsis Events Management is your trusted partner in crafting seamless, impactful experiences across the UAE.
              </p>

              <Link to="/contact">
                  <button className="px-10 py-4 bg-red-600 text-white rounded-full text-xl font-semibold transition-all transform hover:scale-105 custom-home-btn">
                  Create Your Next Event
                </button>
              </Link>
            </div>

            {/* Right Column - Event Image */}
            <div className="relative slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50">
                <img 
                  src={image21} 
                  alt="Xelsis Events Performance" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </div>

              {/* Decorative glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Background gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Our Story Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="w-full h-px bg-cyan-400 absolute top-0"></div>
        
          

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-7xl md:text-8xl font-bold mb-8">
            <span className="gradient-header">Our Story</span>
          </h2>

          <p className="text-white text-lg lg:text-xl leading-relaxed normal-benzin max-w-4xl mx-auto mb-12">
            Backed by two decades of experience and 250+ successful events, Xelsis Events Management is your partner for extraordinary occasions. We specialize in corporate, cultural, and live entertainment experiences that leave lasting impressions across the UAE.
          </p>

          <Link to="/about">
              <button className="px-10 py-4 bg-red-600 text-white rounded-full text-xl font-semibold transition-all transform hover:scale-105 custom-home-btn">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      
      {/* Team/Event Image Section */}
      <section className="relative">
        <div className="w-full h-px bg-cyan-400 "></div>
          <img
            src={home}
            alt="Xelsis Events Team"
            className="object-cover w-[110%] max-w-none" 
          />
        

        <div className="w-full h-px bg-cyan-400"></div>
        
      </section>

      {/* Services Section */}
      <section className="relative py-24 z-10">
        {/* Diagonal Lines Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#00ffff10_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-7xl md:text-8xl font-bold text-center mb-20">
            <span className="gradient-header">Services</span>
          </h2>

          <div className="grid grid-cols-2 divide-x divide-cyan-400/30">
            {/* Corporate & Professional Events */}
              <div className="px-12 py-16 border-l border-t border-cyan-400/30 slide-in">
                <div className="flex items-center gap-6">
                 <img src={icon1} alt="Corporate icon" className="w-14 h-14 filter invert brightness-200" aria-hidden="true"/>

                  <h3 className="text-5xl font-bold leading-tight tracking-wide push-up">
                    <span className="gradient-header-cyan">Corporate &<br />
                    Professional<br />
                    Events</span>
                  </h3>
                </div>
            </div>
            <div className="px-12 py-16 border-t border-r border-cyan-400/30 slide-in-right">
              <p className="text-white   text-lg leading-relaxed normal-benzin push-up">
                Crafting corporate events that reflect your<br />
                brand's professionalism. From<br />
                high-stakes conferences to engaging<br />
                team-building retreats, we manage<br />
                every detail.
              </p>
            </div>
            <div className="col-span-2 h-px bg-cyan-400/30"></div>

            {/* Live Entertainment */}
              <div className="px-12 py-16 border-l border-t border-cyan-400/30 slide-in">
                <div className="flex items-center gap-6">
                  <img src={icon2} alt="Live icon" className="w-14 h-14 filter" aria-hidden="true" />
                  <h3 className="text-5xl font-bold leading-tight tracking-wide push-up">
                    <span className="gradient-header-cyan">Live Entertainment &<br />
                    Cultural Experiences</span>
                  </h3>
                </div>
            </div>
            <div className="px-12 py-16 border-t border-r border-cyan-400/30 slide-in-right">
              <p className="text-white text-lg leading-relaxed normal-benzin push-up">
                Creating unforgettable live entertainment and cultural experiences that captivate your audience. 
                We handle all aspects of concerts, festivals, and shows to deliver a truly magical and memorable event.
              </p>
            </div>
            <div className="col-span-2 h-0.5 bg-cyan-400/30"></div>

            {/* Bespoke & Custom Creations */}
              <div className="px-12 py-16 border-l border-t border-cyan-400/30">
                <div className="flex items-center gap-6">
                  <img src={icon3} alt="Bespoke icon" className="w-14 h-14 filter invert brightness-200" aria-hidden="true" />
                  <h3 className="text-5xl font-bold leading-tight tracking-wide push-up">
                    <span className="gradient-header-cyan">Bespoke &<br />
                    Custom Creations</span>
                  </h3>
                </div>
            </div>
            <div className="px-12 py-16 border-t border-r border-cyan-400/30">
              <p className="text-white text-lg leading-relaxed normal-benzin push-up">
                Designing and executing unique, one-of-a-kind events tailored specifically to your vision. 
                Our team works closely with you to bring your dream occasion to life with meticulous attention to detail.
              </p>
            </div>
            <div className="col-span-2 h-0.5 bg-cyan-400/30"></div>

            {/* Exhibitions */}
              <div className="px-12 py-16 border-l border-t border-cyan-400/30">
                <div className="flex items-center gap-6">
                  <img src={icon4} alt="Exhibitions icon" className="w-14 h-14 filter" aria-hidden="true" />
                  <h3 className="text-5xl font-bold leading-tight tracking-wide push-up">
                    <span className="gradient-header-cyan">Exhibitions</span>
                  </h3>
                </div>
            </div>
            <div className="px-12 py-16 border-t border-r border-cyan-400/30">
              <p className="text-white text-lg leading-relaxed normal-benzin push-up">
                Managing and designing dynamic exhibitions that effectively showcase products and ideas. 
                We provide comprehensive services from booth design to full-scale logistics, ensuring 
                your display makes a lasting impression.
              </p>
            </div>

            {/* Sports Events */}
              <div className="px-12 py-16 border-l border-t border-b border-cyan-400/30">
                <div className="flex items-center gap-6">
                  <img src={icon5} alt="Sports icon" className="w-14 h-14 filter invert brightness-200" aria-hidden="true" />
                  <h3 className="text-5xl font-bold leading-tight tracking-wide push-up">
                    <span className="gradient-header-cyan">Sports Events</span>
                  </h3>
                </div>
            </div>
            <div className="px-12 py-16 border-t border-r border-b border-cyan-400/30">
              <p className="text-white text-lg leading-relaxed normal-benzin push-up">
                Handling the intricate details of sporting<br />
                events, from small local tournaments to<br />
                major competitions. We focus on creating<br />
                a well-organized and exhilarating experience<br />
                for both athletes and spectators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="w-full h-px bg-cyan-400"></div>
     
    </div>
  );
};

