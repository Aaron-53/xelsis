import { MapPin, Phone, Mail, ThumbsUp } from "lucide-react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-box text-white">
      {/* 2x2 Grid on Desktop, List on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Address Section */}
        <div className="contact-info-section">
          <div className="contact-info-header flex flex-col items-center" >
            <MapPin className="contact-info-icon" />
            <div>
              <h3 className="contact-info-title">Address</h3>
              <p className="contact-info-text">
                Post Box No. 29346,<br />
                AbuDhabi, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div className="contact-info-section">
          <div className="contact-info-header flex flex-col items-center">
            <Phone className="contact-info-icon" />
            <div>
              <h3 className="contact-info-title">Phone</h3>
              <div>
                <a href="tel:+971506218392" className="contact-info-link">
                  +971 50 6218392
                </a>
                <a href="tel:+971509018392" className="contact-info-link">
                  +971 50 9018392
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="contact-info-section">
          <div className="contact-info-header flex flex-col items-center">
            <Mail className="contact-info-icon" />
            <div>
              <h3 className="contact-info-title">Email</h3>
              <a
                href="mailto:xelsislive@gmail.com"
                className="contact-info-link"
              >
                xelsislive@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="contact-info-section">
          <div className="contact-info-header flex flex-col items-center">
            <ThumbsUp className="contact-info-icon" />
            <div style={{ textAlign: 'center' }}>
              <h3 className="contact-info-title">Social Media</h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/share/1SMkpoXm8y/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-facebook"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/xelsisevents?igsh=bXN1bzB1cTkyY3Iz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon social-icon-instagram"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;