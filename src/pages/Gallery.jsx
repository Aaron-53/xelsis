function Gallery() {
  // Sample gallery items - replace with your actual images
  const galleryItems = [
    { id: 1, title: "Image 1", color: "bg-blue-500" },
    { id: 2, title: "Image 2", color: "bg-purple-500" },
    { id: 3, title: "Image 3", color: "bg-pink-500" },
    { id: 4, title: "Image 4", color: "bg-green-500" },
    { id: 5, title: "Image 5", color: "bg-yellow-500" },
    { id: 6, title: "Image 6", color: "bg-red-500" },
    { id: 7, title: "Image 7", color: "bg-indigo-500" },
    { id: 8, title: "Image 8", color: "bg-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Gallery</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Explore our collection of stunning visuals and creative work
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              >
                <div
                  className={`w-full h-full ${item.color} transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}
                >
                  <span className="text-white text-2xl font-semibold">
                    {item.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>Replace the colored placeholders with your actual images</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
