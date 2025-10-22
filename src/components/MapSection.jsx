const MapSection = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2471072325206!2d54.515032174864594!3d24.372705764602394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41c94fe85c91%3A0xf2ddf238b9db69b7!2sXelsis%20Events%20Store!5e0!3m2!1sen!2sin!4v1761063610743!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale"
      />
    </div>
  );
};

export default MapSection;
