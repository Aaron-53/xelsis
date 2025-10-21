function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome Home</h1>
          <p className="text-xl text-gray-300 mb-8">
            This is the home page of your website. Discover amazing content and
            explore our services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Feature One</h3>
              <p className="text-gray-400">
                Discover our first amazing feature that will enhance your
                experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Feature Two</h3>
              <p className="text-gray-400">
                Explore the second feature designed to make your life easier.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Feature Three</h3>
              <p className="text-gray-400">
                Experience the third feature that sets us apart from the rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
