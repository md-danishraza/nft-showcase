import React from "react";

function ContactInfo() {
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "Email Us",
      info: "hello@nftme.com",
      link: "mailto:hello@nftme.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "Call Us",
      info: "+1 (234) 567-890",
      link: "tel:+1234567890",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "Visit Us",
      info: "123 Blockchain Ave, CA",
      link: "#",
      description: "Come say hello at our office",
    },
  ];

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-highlight/30 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-grad-start/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-highlight">{method.icon}</div>
              </div>
              <h3 className="font-clash font-semibold text-xl text-white mb-2">
                {method.title}
              </h3>
              <a
                href={method.link}
                className="font-poppins text-highlight text-lg mb-2 inline-block hover:underline"
              >
                {method.info}
              </a>
              <p className="font-poppins text-white/50 text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
