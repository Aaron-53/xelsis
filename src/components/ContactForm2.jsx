const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co//6ad70c9cd304791e14a0c2641c0d1fd9"
      method="POST"
      className="flex flex-col gap-6 bg-[#0b0b0b]/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full md:w-1/2 text-white"
    >
      {/* Hidden Configs */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" />
      <input type="hidden" name="_subject" value="New Contact Form Submission!" />
      <input type="hidden" name="_template" value="box" />

      {/* Name Field */}
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wide text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          rows="6"
          placeholder="Write your message..."
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-md font-semibold text-white uppercase tracking-wider hover:opacity-90 transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
