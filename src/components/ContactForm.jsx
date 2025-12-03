import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-box text-white">
      <form action="https://formspree.io/f/xeoykwjk" method="POST">
        {/* Hidden Configs from ContactForm */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.com/thankyou"
        />
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission!"
        />
        <input type="hidden" name="_template" value="box" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              placeholder="John"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Phone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Tell us about your event..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventType" className="form-label">
            What Type of Event?
          </label>
          <select id="eventType" name="eventType" className="form-input">
            <option value="">Choose an event</option>
            <option value="Corporate & Professional Events">
              Corporate & Professional Events
            </option>
            <option value="Live Entertainment & Cultural Experience">
              Live Entertainment & Cultural Experience
            </option>
            <option value="Bespoke & Custom Creations">
              Bespoke & Custom Creations
            </option>
            <option value="Exhibitions">Exhibitions</option>
            <option value="Sports Events">Sports Events</option>
          </select>
        </div>

        <button type="submit" className="form-submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
