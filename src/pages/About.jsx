function About() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
          <div className="space-y-6 text-gray-300">
            <p className="text-xl">
              We are a passionate team dedicated to delivering exceptional
              experiences and innovative solutions to our clients.
            </p>
            <p className="text-lg">
              Founded with a vision to make a difference, our company has grown
              to become a trusted partner for businesses around the world. We
              believe in quality, innovation, and customer satisfaction above
              all else.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-400">
                  To provide cutting-edge solutions that empower businesses to
                  achieve their goals and exceed expectations.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading provider of innovative solutions and set new
                  standards in excellence and customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
