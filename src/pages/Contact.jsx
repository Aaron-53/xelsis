import ContactInfo from "../components/ContactInfo.jsx";
import ContactForm from "../components/ContactForm.jsx";
import MapSection from "../components/MapSection.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="diagonal-lines-bg min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 flex items-center justify-center tracking-tight text-center">
            <span className="gradient-header">
              LET'S CONNECT
            </span>
          </h1>
          <p className="contact-paragraph text-white leading-loose text-lg normal-benzin w-1/2 text-center text-pretty">
            We'd love to hear from you! Whether you're planning your next big event or simply have a question, our team is here to help. Reach out today and let's start creating unforgettable experiences together.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-6 md:px-0">
        <div className="contact-container flex gap-0">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <MapSection />
      </section>


    </div>
  );
};

export default Contact;
