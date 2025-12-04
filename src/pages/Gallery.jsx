import { useState } from "react";
import SEO from "../components/SEO";
import { breadcrumbSchema } from "../utils/structuredData";

// Import all gallery images from assets
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.jpg";
import image5 from "../assets/gallery/image5.jpg";
import image6 from "../assets/gallery/image6.jpg";
import image7 from "../assets/gallery/image7.jpg";
import image8 from "../assets/gallery/image8.jpg";
import image9 from "../assets/gallery/image9.jpg";
import image10 from "../assets/gallery/image10.jpg";
import image11 from "../assets/gallery/image11.jpg";
import image12 from "../assets/gallery/image12.jpg";
import image13 from "../assets/gallery/image13.jpg";
import image14 from "../assets/gallery/image14.jpg";
import image15 from "../assets/gallery/image15.jpg";
import image16 from "../assets/gallery/image16.jpg";
import image17 from "../assets/gallery/image17.jpg";
import image18 from "../assets/gallery/image18.jpg";
import image19 from "../assets/gallery/image19.jpg";
import image20 from "../assets/gallery/image20.jpg";
import image21 from "../assets/gallery/image21.jpg";
import image22 from "../assets/gallery/image22.jpg";
import image23 from "../assets/gallery/image23.jpg";
import image24 from "../assets/gallery/image24.jpg";
import image25 from "../assets/gallery/image25.jpg";
import image26 from "../assets/gallery/image26.jpg";
import image27 from "../assets/gallery/image27.jpg";
import image28 from "../assets/gallery/image28.jpg";
import image29 from "../assets/gallery/image29.jpg";


function Gallery() {
  const [visibleItems, setVisibleItems] = useState(6);

  // Gallery items array - Images imported from src/assets/gallery/
  const galleryItems = [
    {
      id: 1,
      src: image1,
      alt: "Event stage setup with presentation",
    },
    {
      id: 2,
      src: image2,
      alt: "Audio equipment and sound mixing console",
    },
    {
      id: 3,
      src: image3,
      alt: "Event stage with audience view",
    },
    {
      id: 4,
      src: image4,
      alt: "Temple decoration setup",
    },
    { id: 5, src: image5, alt: "Indoor event venue" },
    {
      id: 6,
      src: image6,
      alt: "Outdoor event canopy setup",
    },
    {
      id: 7,
      src: image7,
      alt: "Event lighting and stage design",
    },
    { id: 8, src: image8, alt: "Corporate event setup" },
    { id: 9, src: image9, alt: "Wedding decoration" },
    {
      id: 10,
      src: image10,
      alt: "Conference hall arrangement",
    },
    { id: 11, src: image11, alt: "Outdoor event tent" },
    {
      id: 12,
      src: image12,
      alt: "Stage performance setup",
    },
    {
      id: 13,
      src: image13,
      alt: "Sound and lighting equipment",
    },
    {
      id: 14,
      src: image14,
      alt: "Event decoration details",
    },
    { id: 15, src: image15, alt: "Banquet hall setup" },
    { id: 16, src: image16, alt: "Cultural event stage" },
    { id: 17, src: image17, alt: "LED screen display" },
    {
      id: 18,
      src: image18,
      alt: "Event seating arrangement",
    },
    {
      id: 19,
      src: image19,
      alt: "Outdoor ceremony setup",
    },
    {
      id: 20,
      src: image20,
      alt: "Stage backdrop design",
    },
    {
      id: 21,
      src: image21,
      alt: "Event entrance decoration",
    },
    {
      id: 22,
      src: image22,
      alt: "Professional audio setup",
    },
    {
      id: 23,
      src: image23,
      alt: "Event lighting design",
    },
    { id: 24, src: image24, alt: "Complete event setup" },
    { id: 25, src: image25, alt: "Complete event setup" },
    { id: 26, src: image26, alt: "Complete event setup" },
    { id: 27, src: image27, alt: "Complete event setup" },
    { id: 28, src: image28, alt: "Complete event setup" },
    { id: 29, src: image29, alt: "Complete event setup" },
  ];

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, galleryItems.length));
  };

  return (
    <div className="min-h-screen relative">
      <SEO
        title="Event Gallery - Xelsis Events Management UAE"
        description="Explore our stunning gallery showcasing 250+ successful events managed by Xelsis Events. From corporate events to cultural celebrations and live entertainment across the UAE."
        keywords="event gallery UAE, corporate events gallery, cultural events photos, live entertainment events, Xelsis Events portfolio, Dubai events gallery"
        url="/gallery"
        image="/images/gallery-featured.jpg"
        structuredData={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ])}
      />

      {/* Hero Section with Background Pattern */}
      <div className="relative">
        {/* Gallery Title */}
        <div className="relative z-10 text-center flex justify-center py-20">
          <h1 className="text-7xl gradient-header text-center md:text-8xl font-bold">
            Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {galleryItems.slice(0, visibleItems).map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden group cursor-pointer border"
              style={{ borderColor: "#65fffc" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < galleryItems.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-semibold rounded-full transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
