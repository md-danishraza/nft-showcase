import React, { useState } from "react";
import HighLightButton from "../HighlightButton";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-grad-start opacity-10 blur-[150px] animate-float-3"></div>
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-grad-end opacity-10 blur-[150px] animate-float-2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="font-clash font-semibold text-2xl md:text-3xl text-white mb-2">
                Send us a Message
              </h2>
              <p className="font-poppins text-white/60 text-sm mb-6 pb-4 border-b border-white/10">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in-up">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-clash text-xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-poppins text-white/60 text-sm">
                    Thanks for reaching out. We'll respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-poppins text-sm text-white/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-poppins focus:outline-none focus:border-highlight/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-sm text-white/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-poppins focus:outline-none focus:border-highlight/50 transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-sm text-white/70 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-poppins focus:outline-none focus:border-highlight/50 transition-colors"
                      placeholder="General Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block font-poppins text-sm text-white/70 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-poppins focus:outline-none focus:border-highlight/50 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-grad-start to-grad-end text-white font-clash font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="font-clash font-semibold text-xl text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-grad-start/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-highlight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins text-sm text-white/50">Email</p>
                    <a
                      href="mailto:hello@nftme.com"
                      className="font-poppins text-white hover:text-highlight transition-colors"
                    >
                      hello@nftme.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-grad-start/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-highlight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins text-sm text-white/50">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="font-poppins text-white hover:text-highlight transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-grad-start/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-highlight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-poppins text-sm text-white/50">Office</p>
                    <p className="font-poppins text-white">
                      123 Blockchain Ave
                      <br />
                      Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="font-clash font-semibold text-xl text-white mb-4">
                Support Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-poppins text-white/60">
                    Monday - Friday
                  </span>
                  <span className="font-poppins text-white">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-poppins text-white/60">Saturday</span>
                  <span className="font-poppins text-white">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-white/60">Sunday</span>
                  <span className="font-poppins text-white">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="font-clash font-semibold text-xl text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-highlight hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-highlight hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-highlight hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-highlight hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
