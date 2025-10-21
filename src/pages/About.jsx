import aboutUsImage from "../assets/about_us.jpg";
import founderImage from "../assets/founder.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen text-white">
    
     

      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-8 border-t-2 border-b-2"
      >
        <div className="absolute bg-transparent inset-0" />
        <div className="container relative z-10 bg-transparent text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="gradient-header">
              Elevate Your Event
            </span>
          </h1>
        </div>
      </section>

      {/* The Xelsis Journey Section */}
      <section className=" ">
        <div className="container ">
          <div className="grid md:grid-cols-2 gap-0 border-2 border-primary border-[#65fffc]">
            <div className="relative overflow-hidden">
              <img 
                src={aboutUsImage} 
                alt="Xelsis Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="relative flex flex-col justify-center px-8 md:px-16 py-16"
            >
              <div className="absolute inset-0 /50" />
              <div className="relative z-10">
                <h2 className="text-4xl text-center md:text-5xl font-bold mb-8 text-[#65fffc]">
                  The Xelsis Journey
                </h2>
                <p className="text-lg text-pretty text-center mb-6 leading-relaxed">
                  Xelsis Events Management was born from the vision of Mathews P John, who officially 
                  launched the company in 2021 after more than 20 years of experience in the UAE's 
                  events landscape.
                </p>
                <p className="text-lg text-pretty text-center leading-relaxed">
                  What began as a solo journey has grown into a full-service event management partner 
                  based in Abu Dhabi. Our foundation is built on passion, creativity, and commitment — 
                  values that drive us to craft seamless, impactful experiences across the UAE. Even as 
                  we've grown, we remain proud of delivering the personalized care and attention that 
                  only boutique-level service can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Passion to Profession Section */}
      <section 
        className="relative py-20 border-t-2 border-b-2 border-[#65fffc]"

      >
        <div className="absolute inset-0 /60" />
        <div className="container mx-auto pl-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="gradient-header">
                  From Passion to Profession
                </span>
              </h2>
              <blockquote className="text-lg text-pretty text-center md:text-xl leading-relaxed italic mb-8">
                "For as long as I can remember, I've been drawn to the magic of bringing people together. 
                My first love was music and songwriting — creating moments that could move people, connect 
                them, and leave a lasting memory. Over time, that same passion evolved into a love for events. 
                I realized that events are just like music: they have rhythm, energy, and the power to create 
                unforgettable experiences.
                <br /><br />
                Xelsis is my way of turning that passion into something bigger. What started as a one-man 
                mission has grown into a team that shares the same vision — to make every event not just 
                organized, but meaningful, seamless, and inspiring."
              </blockquote>
              <p className="text-right text-xl font-semibold">— Mathews P John</p>
            </div>
            <div className="order-1 md:order-2 flex justify-end">
              <img 
                src={founderImage} 
                alt="Mathews P John - Founder" 
                className="w-full  rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-5 border-t-2 border-b-2 border-[#65fffc]">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-header">
                  Our Vision
                </span>
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-pretty text-center md:text-xl leading-relaxed italic mb-8">
                Xelsis envisions a future where every event we manage reflects our commitment to 
                understanding and exceeding client expectations. We aim to set the standard for 
                people-focused events in the UAE and beyond delivering seamless, memorable experiences 
                that build lasting relationships and create moments of joy for clients and their guests 
                alike. As we grow regionally and internationally, our core promise remains the same: 
                personal attention, adaptability, and a dedication to turning every client's vision into 
                reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section 
        className="relative py-20 border-t-2 border-b-2"
        
      >
        <div className="absolute inset-0 /70" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="gradient-header">
              What Sets Us Apart
            </span>
          </h2>
          
          <div className="  space-y-0">
            {/* Top row - 3 boxes */}
            <div className="grid md:grid-cols-3">
              <div className="/60 backdrop-blur-sm p-8 border-2 border-[#65fffc]" >
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text">20+ Years of Experience</h3>
                <p className="text-muted-foreground text-center">
                  From freelance events to sophisticated large-scale productions
                </p>
              </div>
              
              <div className="/60 backdrop-blur-sm p-8 border-2 border-l-0 border-[#65fffc]" >
                <h3 className="text-2xl font-bold mb-4 text-secondary blue-gradient-text">
                  Personalized Approach with Global Standards
                </h3>
                <p className="text-muted-foreground">
                  Boutique care, with an eye for industry-leading practices.
                </p>
              </div>
              
              <div className="/60 backdrop-blur-sm p-8 border-2 border-l-0" style={{ borderColor: '#65fffc' }}>
                <h3 className="text-2xl font-bold mb-4 text-secondary">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From conceptual design and planning to execution and wrap-up.
                </p>
              </div>
            </div>
            
            {/* Bottom row - 2 boxes expanded */}
            <div className="grid md:grid-cols-2">
              <div className="/60 backdrop-blur-sm p-8 border-2 border-t-0" style={{ borderColor: '#65fffc' }}>
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  Strong Vendor & Venue Network
                </h3>
                <p className="text-muted-foreground">
                  Trusted partnerships across the region for seamless delivery
                </p>
              </div>
              
              <div className="/60 backdrop-blur-sm p-8 border-2 border-t-0 border-l-0" style={{ borderColor: '#65fffc' }}>
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  Creative, Flexible, and Reliable
                </h3>
                <p className="text-muted-foreground">
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
